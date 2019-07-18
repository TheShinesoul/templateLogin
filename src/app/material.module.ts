import {NgModule} from '@angular/core'
import {
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule
    
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
        MatDividerModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatFormFieldModule,
        MatTabsModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule
    ]
})
export class MaterialModule{}