import { Component, OnChanges, Input } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
    onClick(): void {
        console.log('The rating ' + this.rating + ' was clicked');
    }
}
