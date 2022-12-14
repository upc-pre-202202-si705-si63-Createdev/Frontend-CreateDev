import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { TipoComporbanteService } from 'src/app/service/tipo-comporbante.service';
import { Tipo_Comprobante } from 'src/app/model/tipo-comprobante';
import { MatTableDataSource } from '@angular/material/table';
import { TipoComprobanteDialogoComponent } from './tipo-comprobante-dialogo/tipo-comprobante-dialogo.component';
@Component({
  selector: 'app-tipo-comprobante-listar',
  templateUrl: './tipo-comprobante-listar.component.html',
  styleUrls: ['./tipo-comprobante-listar.component.css']
})
export class TipoComprobanteListarComponent implements OnInit {
  dataSource: MatTableDataSource<Tipo_Comprobante> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'tipo', 'acciones', 'acciones2'];
  private idMayor: number = 0;
  constructor(private ps: TipoComporbanteService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.ps.listar().subscribe((data: Tipo_Comprobante[] | undefined) => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.ps.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.ps.getConfirmaEliminacion().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    });
  }
  confirmar(id: number) {
    this.idMayor = id;
    this.dialog.open(TipoComprobanteDialogoComponent);

  }
  eliminar(id: number) {
    this.ps.eliminar(id).subscribe(() => {
      this.ps.listar().subscribe(data => {
        this.ps.setLista(data);/* se ejecuta la línea 27*/
      });
    });
  }
}
