import { Routes } from "@angular/router";
import { HomeComponent } from "./Home/Home.component";
import { LoginComponent } from "./Login/Login.component";
import { MainComponent } from "./Main/Main.component";
export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'main', component: MainComponent,
        children: [
            { path: 'home', component: HomeComponent },
        ]
    },
    { path: '', component: LoginComponent }
]
