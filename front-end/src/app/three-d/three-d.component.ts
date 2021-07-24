import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-three-d',
  templateUrl: './three-d.component.html',
  styleUrls: ['./three-d.component.scss'],
})
export class ThreeDComponent implements OnInit {
  constructor(private el: ElementRef) {}

  public ngOnInit(): void {
    // window.addEventListener(
    //   'mousemove',
    //   (e) => {
    //     const convertedTop = this.tiltCalculator(e.screenY);
    //     this.stage.tilt(convertedTop);
    //   },
    //   false,
    // );
  }

  private tiltCalculator(screenPosY: number): number {
    const scaledY = screenPosY / 170;
    return 10 * scaledY;
  }
}
