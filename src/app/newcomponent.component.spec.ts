/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NewcomponentComponent } from './newcomponent.component';

describe('Component: Newcomponent', () => {
  it('should create an instance', () => {
    let component = new NewcomponentComponent();
    expect(component).toBeTruthy();
  });
});
