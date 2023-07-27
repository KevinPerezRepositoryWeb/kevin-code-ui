import { Injectable } from "@angular/core";
import { NavBar } from "../interfaces/nav-bar.interface";

@Injectable({
    providedIn: 'root'
})
export class NavBarService {

    data: NavBar[] = [
        {
            routeLink: 'folders',
            icon: 'favorite',
            label: 'Mi colección'
        },
        {
            routeLink: 'code',
            icon: 'fingerprint',
            label: 'Reconocimiento'
        }
    ]

}