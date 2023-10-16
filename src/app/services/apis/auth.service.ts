import { Injectable } from '@angular/core';
import { createClient, RealtimeChannel, SupabaseClient } from '@supabase/supabase-js';
import { Observable, Subject, from, of } from 'rxjs';
import { Folder } from 'src/app/interfaces/folders.interface';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    supabase: SupabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
    constructor() {
    }

    async createUser() {
        const { data, error }= await this.supabase.auth.signUp({
            email: '74930502@pronabec.edu.pe',
            password: '123456789',
        })
    }

    async singIn() {
        const { data, error } = await this.supabase.auth.signInWithPassword({
            email: 'example@email.com',
            password: 'example-password',
        })

        console.log("data-->", data)
        console.log("error-->", error)

    }
}
