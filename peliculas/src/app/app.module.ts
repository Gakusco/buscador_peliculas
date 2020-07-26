import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { BuscarComponent } from './componentes/buscar/buscar.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { EstrellaComponent } from './componentes/estrella/estrella.component';
import { ImagePipe } from './image.pipe';
import { TarjetaComponent } from './componentes/tarjeta/tarjeta.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BuscarComponent,
    EstrellaComponent,
    ImagePipe,
    TarjetaComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
