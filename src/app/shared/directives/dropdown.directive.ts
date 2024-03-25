import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  Renderer2,
  TemplateRef,
  ViewContainerRef
} from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  elementRef = inject(ElementRef);

  renderer = inject(Renderer2);

  private clicked = false;

  @HostListener('click')
  toggleDropdown(event: Event) {
    this.clicked = !this.clicked;
    let dropdownMenuElement = this.elementRef.nativeElement.querySelector('.dropdown-menu');
    if (this.clicked) {
      this.renderer.addClass(dropdownMenuElement, "show");
    } else {
      this.renderer.removeClass(dropdownMenuElement, "show");
    }
  }

}
