import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NiveausComponent } from './niveaus/niveaus.component';
import { VojComponent } from './niveaus/voj/voj.component';
import { VosComponent } from './niveaus/vos/vos.component';
import { GloComponent } from './niveaus/glo/glo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocentenComponent } from './docenten/docenten.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [{ path: '', component: HomeComponent },
{ path: 'glo', component: GloComponent },
{ path: 'voj', component: VojComponent },
{ path: 'vos', component: VosComponent },
{ path: 'niveaus', component: NiveausComponent },
{ path: 'register', component: RegisterComponent },

{ path: 'docenten', component: DocentenComponent }];

@NgModule({
  declarations: [
    AppComponent,
    NiveausComponent,
    VojComponent,
    VosComponent,
    GloComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DocentenComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,MatMenuModule, MatButtonModule,
    BrowserAnimationsModule,MatIconModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
