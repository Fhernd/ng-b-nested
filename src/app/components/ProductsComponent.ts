import {
    NgModule, 
    Component
} from '@angular/core';
import {
    RouterModule, 
    ActivatedRoute, 
    Router, 
    Routes
} from '@angular/router';

/**
 * Components
 */
import {
    MainComponent
} from './products/MainComponent';
import {
    InterestComponent
} from './products/InterestComponent';
import {
    SportifyComponent
} from './products/SportifyComponent';
import {
    ByIdComponent
} from './products/ByIdComponent';

@Component({
    selector: 'products', 
    templateUrl: './ProductsComponent.html'
})
export class ProductsComponent {
    constructor(private router:Router, private route: ActivatedRoute){

    }

    goToProduct(id: string) : void {
        this.router.navigate(['./', id], {relativeTo: this.route});
    }
}

export const routes: Routes = [
  { path: '', redirectTo: 'main' },
  { path: 'main', component: MainComponent },
  { path: ':id', component: ByIdComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'sportify', component: SportifyComponent },
];

@NgModule({
  declarations: [
    ProductsComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
    ByIdComponent
  ],
  exports: [
    ProductsComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
    ByIdComponent
  ],
  imports: [ RouterModule ]
})
export class ProductsComponentModule {}