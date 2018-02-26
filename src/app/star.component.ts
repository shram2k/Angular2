import { Component, OnChanges, Input } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number = 4;
    @Output() notify:
    starWidth: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }
<<<<<<< HEAD
    onClick(): void {
        console.log('The rating ' + this.rating + ' was clicked');
=======
    onClick() {
        console.log('clicked');
        this.ratingClicked.emit('The rating ' + this.rating + ' clicked!!');
>>>>>>> af9abddc274cf8a30306b750897a0bf58e58fdff
    }
}
