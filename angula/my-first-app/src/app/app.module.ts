import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductComponent } from './components/product/product.component';
import {RouterModule,Routes} from '@angular/router';

import {UsersService} from './services/users.service';

const appRoutes:Routes = [
{path:"",component:ProfileComponent},
{path:"products",component:ProductComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    ProfileComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
    ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
