import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { productService } from 'src/services/products/product.service';

interface Usersdata {
  id: number;
  name: string;
  email: string;
  comments: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class productsComponent implements OnInit, AfterViewInit {

  productsList: any = [];
  dataSource = this.productsList;
  public pageSize = 10;
  public currentPage = 0;
  public totalSize = 0;
  public array: any;
  searchTerm = '';

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public data: MatTableDataSource<any> = new MatTableDataSource<Usersdata>()
  
  
  displayedColumns: string[] = ['id', 'name', 'email', 'comments'];
  
  constructor(public productServ: productService,
    private _liveannouncer: LiveAnnouncer) { }
    
    ngOnInit() {
      this.getArray();
      this.productsList.sort = this.sort;
    }
    
    ngAfterViewInit() {
      this.data.sort = this.sort;
    }
    
    public handlePage(e: any) {
      this.currentPage = e.pageIndex;
      this.pageSize = e.pageSize;
      this.iterator();
    }
    
    private iterator() {
      const end = (this.currentPage + 1) * this.pageSize;
      const start = this.currentPage * this.pageSize;
      const part = this.array.slice(start, end);
      this.dataSource = part;
    }

    onMatSortChange() {
      this.data.sort = this.sort;
    }
    
    filterCountries(searchTerm: string) {
      this.data.filter = searchTerm.trim().toLocaleLowerCase();
      const filterValue = searchTerm;
      this.data.filter = filterValue.trim().toLowerCase();
    }

    private getArray() {
      this.productServ.getUsersList()
      .subscribe((response: any) => {
        this.dataSource = new MatTableDataSource<Element>(response);
        this.dataSource.paginator = this.paginator;
        this.array = response;
        this.totalSize = this.array.length;
        this.iterator();
      });
    }
    
  }