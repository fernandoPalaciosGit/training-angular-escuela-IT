import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocalTraceService } from '@shares/services/local-trace.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private localTraceService: LocalTraceService
  ) {
    // todo: es necesario inicializar el formulario en el constructor,
    //  porque tiene que estar instanciado antes de que es renderice el componente en pantalla (antes de ejecutarse el ngOnInit)
    this.productForm = this.formBuilder.group({
      productTitle: ['', [Validators.required]],
      productFile: [''],
      productPrice: [100, [Validators.required, Validators.min(200)]],
      productInfo: ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  ngOnInit(): void {
  }

  // todo: para un mejor manejo de controles en el template, se definen hooks de acceso a cada control
  get productInfo(): AbstractControl {
    return this.productForm.get('productInfo');
  }

  get productPrice(): AbstractControl {
    return this.productForm.get('productPrice');
  }

  onSubmitForm() {
    alert(this.localTraceService.logInfo(this, this.productForm.value));
  }
}
