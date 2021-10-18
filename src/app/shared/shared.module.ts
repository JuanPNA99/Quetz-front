import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { LevelsPipe } from './pipes/levels.pipe';

@NgModule({
    declarations: [PageNotFoundComponent, SnackbarComponent, LevelsPipe],
    exports: [SnackbarComponent, LevelsPipe],
    imports: [CommonModule],
})
export class SharedModule {}
