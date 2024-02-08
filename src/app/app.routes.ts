import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [ //lade eine neue seite(optisch) ohne den browser zu aktuallesieren
{ path: '', component: MainContentComponent }, //lade standart seite
{ path: 'header', component: MainContentComponent }, //lade standart seite
{ path: 'imprint', component: ImprintComponent } // bein anklicken -lade neue seite
    // { path: 'second-component', component: SecondComponent },
];
