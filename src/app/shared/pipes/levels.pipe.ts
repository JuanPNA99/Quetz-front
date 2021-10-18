import { Pipe, PipeTransform } from '@angular/core';

const LEVELS: Record<string, string> = {
    bas: 'Básico',
    med: 'Medio',
    adv: 'Avanzado',
};

@Pipe({
    name: 'levels',
})
export class LevelsPipe implements PipeTransform {
    transform(value: any): any {
        return LEVELS[value] ? LEVELS[value] : 'Indefinido';
    }
}
