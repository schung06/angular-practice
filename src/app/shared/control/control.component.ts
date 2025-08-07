import { Component, input } from '@angular/core';

@Component({
    selector: 'app-control',
    standalone: true,
    imports: [],
    templateUrl: './control.component.html',
    styleUrls: ['./control.component.css'],
})
export class ControlComponent {
    label = input.required<string>();
}