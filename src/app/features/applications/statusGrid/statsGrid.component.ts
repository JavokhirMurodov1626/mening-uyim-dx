import { Component } from "@angular/core";
import { GridBoxComponent } from "./gridBox.component";



@Component({
  selector: "stats-grid",
  standalone: true,
   imports:[ GridBoxComponent],
    template: `
        <section class="grid grid-cols-4 gap-2 bg-white rounded p-2  ">
            <grid-box [statusData]="{ title: 'Qiyoslashdan ijobiy o’tkazildi', count: 10 , color:bgColors[0]}"/>
            <grid-box [statusData]="{ title: 'Qiyoslashdan ijobiy o’tkazildi', count: 10, color:bgColors[1] }"/>
            <grid-box [statusData]="{ title: 'Qiyoslashdan ijobiy o’tkazildi', count: 10, color:bgColors[2] }"/>
            <grid-box [statusData]="{ title: 'Qiyoslashdan ijobiy o’tkazildi', count: 10, color:bgColors[3] }"/>
            <grid-box [statusData]="{ title: 'Qiyoslashdan ijobiy o’tkazildi', count: 10, color:bgColors[4] }"/>
            <grid-box [statusData]="{ title: 'Qiyoslashdan ijobiy o’tkazildi', count: 10, color:bgColors[5] }"/>
            <grid-box [statusData]="{ title: 'Qiyoslashdan ijobiy o’tkazildi', count: 10, color:bgColors[6] }"/>
        </section>
    `,
    styles: `

    `
    
})

export class StatsGridComponent {
  public status: string = "active";

  bgColors = [
    "#DADDF0",
    "#CCEDFF",
    "#C8CDEC",
    "#FFE7BA",
    "#99D689",
    "#FDD9D9",
    "#D4EAA9"
  ];
}