import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector:'[activeLabel]'
})
export class ActiveLabelDirective {
    private _inputValue:string;
    @Input('activeLabel')
        set activeLabel($event:string){
            this._inputValue = $event;
            this._setActiveLabel($event);
        }

    constructor(private _elementRef:ElementRef){}
    
    private _setActiveLabel(inputValue:string):void {
        const contains:boolean = this._elementRef.nativeElement.classList.contains('active-label');
        if(inputValue && inputValue.length>0){
            if(!contains){
                this._elementRef.nativeElement.classList.add('active-label');
            }
        }
        else{
            if(contains){
                this._elementRef.nativeElement.classList.remove('active-label');
            }
        }
    }
}