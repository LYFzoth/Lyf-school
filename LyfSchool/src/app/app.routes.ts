import { Routes } from '@angular/router';
import { HomeIntroductionComponent } from './screens/home-introduction/home-introduction.component';
import { RequestComponent } from './screens/request/request.component';
import { QuiestionsComponent } from './screens/quiestions/quiestions.component';
import { LoginComponent } from './screens/login/login.component';
import { DetailComponent } from './screens/detail/detail.component';
import { StudentScreenComponent } from './screens/student-screen/student-screen.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo:'home',
        pathMatch: 'full',
    },
    {
        path:'home',
        component: HomeIntroductionComponent,
    },
    {
        path:'request',
        component:RequestComponent,
    },
    {
        path:'question',
        component:QuiestionsComponent,
    },
    {
        path:'login',
        component:LoginComponent,
    },
    {
        path:'detail',
        component:DetailComponent,
    },
    {
        path:'student',
        component:StudentScreenComponent,
    }
];
