import { Routes } from '@angular/router';
import { NgModel } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

export const routes: Routes = [];

@NgModule({
    imports :[RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
