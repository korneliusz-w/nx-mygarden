import { Component } from '@angular/core';
import { PAGE_VEGETABLE_CATALOG_PATH } from '@nx-mygarden/page-vegetable-catalog';
import { PAGE_VEGETABLE_CATEGORIES_PATH } from '@nx-mygarden/page-vegetable-categories';
import { PAGE_VEGETABLE_GROUPS_PATH } from '@nx-mygarden/page-vegetable-groups';

@Component({
  selector: 'lib-vegetables-shell',
  templateUrl: './vegetables-shell.component.html',
  styleUrl: './vegetables-shell.component.scss',
})
export class VegetablesShellComponent {
  pageCatalogUrl = PAGE_VEGETABLE_CATALOG_PATH;
  pageCategoriesUrl = PAGE_VEGETABLE_CATEGORIES_PATH;
  pageGroupUrl = PAGE_VEGETABLE_GROUPS_PATH;
}
