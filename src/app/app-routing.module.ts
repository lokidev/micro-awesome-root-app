import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibCompanyLibComponent } from '@lokidev/company-lib';
import { LibPersonLibComponent } from '@lokidev/person-lib';
import { LibTechLibComponent } from '@lokidev/tech-lib';
import { MongoComponent } from './components/mongo/mongo.component';
import { ReadMeComponent } from './components/read-me/read-me.component';
import { MyStoreComponent } from './components/store/store.component';

const routes: Routes = [
  { path: 'tech', component: LibTechLibComponent },
  { path: 'companies', component: LibCompanyLibComponent },
  { path: 'people', component: LibPersonLibComponent },
  { path: 'mongo', component: MongoComponent },
  { path: 'readme', component: ReadMeComponent },
  { path: 'store', component: MyStoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
