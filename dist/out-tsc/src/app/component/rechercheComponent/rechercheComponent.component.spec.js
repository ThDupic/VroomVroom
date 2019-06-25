/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { RechercheComponentComponent } from './rechercheComponent.component';
describe('RechercheComponentComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RechercheComponentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RechercheComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rechercheComponent.component.spec.js.map