import {NgModule} from '@angular/core'
import {
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatDividerModule
    
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatMenuModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatMenuModule,
        MatDividerModule
    ]
})
export class MaterialModule{}