import { Injectable } from '@angular/core';
import { createClient, RealtimeChannel, SupabaseClient } from '@supabase/supabase-js';
import { Observable, Subject, from, of } from 'rxjs';
import { Folder } from 'src/app/interfaces/folders.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FolderService {
    channelFolder!: RealtimeChannel;

    private changes_folder$ = new Subject<any>();
    supabase: SupabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
    constructor() {
    }

    private table_folder = 'folder';

    getAllFolders(): Observable<Folder[]> {
        const res: Observable<any> = from(this.supabase.from(this.table_folder)
            .select('*')
            .then(response => response.data));
        return res;
    }


    initFolderChanges$() {
        this.channelFolder = this.supabase.channel('any')
            .on('postgres_changes', { event: '*', schema: 'public', table: this.table_folder }, payload => {
                console.log('Change received!', payload)
                this.changes_folder$.next(payload);
            })

        return this.channelFolder;
    }


    changeFolderSubscribe$() {
        return this.changes_folder$.asObservable();
    }

    changesFolderUnsubscribe$() {
        this.changes_folder$.complete();
        this.supabase.removeChannel(this.channelFolder);
    }
}
