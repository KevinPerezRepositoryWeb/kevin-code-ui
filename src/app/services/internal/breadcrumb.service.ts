import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BreadcrumbService {

    // EventEmitter para emitir eventos de actualización del breadcrumb
    breadcrumbUpdated = new EventEmitter<string[]>();

    // Método para actualizar el breadcrumb y emitir el evento
    updateBreadcrumb(newBreadcrumb: string[]) {
        this.breadcrumbUpdated.emit(newBreadcrumb);
    }
}