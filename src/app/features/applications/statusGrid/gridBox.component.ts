import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule


@Component({
    selector: "grid-box",
    imports: [CommonModule], // Import CommonModule
    standalone: true,
    template: `
        <div class="grid-box rounded bg-secondary-200 flex justify-between p-2">
            <h4 class="text-xsm text-dark-700 font-InterMedium ">{{ statusData.title }}</h4>
            <p
            [ngStyle]="{ 'background-color': statusData.color ? statusData.color : '#DADDF0' }"
            class="flex items-center justify-center text-sm font-InterMedium text-dark-700 rounded-[50px] px-3 " >{{ statusData.count }}</p>
        </div>
    `,
    styles: `   
       
    `
})
    
export class GridBoxComponent {
    @Input({ required: true }) statusData!: { title: string, count: number,color?:string };
}
