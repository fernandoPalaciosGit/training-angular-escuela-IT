import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.scss']
})
export class ProductNewComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    // todo: es necesario inicializar el formulario en el constructor,
    //  porque tiene que estar instanciado antes de que es renderice el componente en pantalla (antes de ejecutarse el ngOnInit)
    this.productForm = this.formBuilder.group({
      productTitle: ['', Validators.required],
      productFile: [''],
      productPrice: [100, Validators.required],
      productInfo: ['', [Validators.required, Validators.minLength(50)]]
    });
  }

  ngOnInit(): void {
  }

  // todo: para un mejor manejo de controles en el template, se definen hooks de acceso a cada control
  get productInfo() {
    return this.productForm.get('productInfo');
  }

  onSubmitForm() {
    alert(JSON.stringify(this.productForm.value, null, '\t'));
  }
}
