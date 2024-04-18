import { Component } from '@angular/core';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.component.html',
  styleUrls: ['./order-tracking.component.css']
})
// src/app/order-tracking/order-tracking.component.ts

export class OrderTrackingComponent {
  ordenSeleccionada: any = null;

  ordenes: any[] = [
    { id: 1, estado: 'Recibido', observaciones: 'Ninguna' },
    { id: 2, estado: 'En Mantenimiento', observaciones: 'Requiere piezas de repuesto' },
    { id: 3, estado: 'Listo para Retiro/Envío', observaciones: 'Cliente notificado' },
    { id: 4, estado: 'Orden finalizada', observaciones: 'Orden Finalizada' }
  ];

  calcularProgreso(estado: string): string {
    switch (estado) {
      case 'Recibido':
        return '33%';
      case 'En Mantenimiento':
        return '67%';
      case 'Listo para Retiro/Envío':
        return '100%';
      default:
        return '0%';  // Cuando no hay datos o el estado no es reconocido
    }
  }

  calcularValorProgreso(estado: string): number {
    switch (estado) {
      case 'Recibido':
        return 33;
      case 'En Mantenimiento':
        return 67;
      case 'Listo para Retiro/Envío':
        return 100;
      default:
        return 0;  // Cuando no hay datos o el estado no es reconocido
    }
  }
  calcularClaseCirculo(estadoActual: string, estadoCirculo: string): string {
    if (!this.ordenSeleccionada) {
      return ''; // Retorna clase vacía si no hay orden seleccionada
    }
    return this.ordenSeleccionada.estado === estadoCirculo ? 'active' : '';
  }

  buscarOrden(ordenId: string): void {
    const id = parseInt(ordenId, 10);
    this.ordenSeleccionada = this.ordenes.find(orden => orden.id === id);
  }
}

