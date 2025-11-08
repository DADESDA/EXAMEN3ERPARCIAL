import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'jsonToList', standalone: true })
export class JsonToListPipe implements PipeTransform {
  transform(obj: any, type: 'languages'|'currencies' = 'languages'): string {
    if (!obj) return '-';
    if (type === 'languages') return Object.values(obj).join(', ');
    return Object.values(obj).map((c: any) => c?.name ?? '').filter(Boolean).join(', ');
  }
}
