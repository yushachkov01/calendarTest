/**
 *   Импорт необходимых модулей и компонентов
 */
import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
/**
 *   Импорт модулей для работы с модальными окнами
 */
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
/**
 *   Импорт настроек и плагинов для календаря
 */
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {

  @ViewChild('template') template!: string;
  @Output() onRemove = new EventEmitter<number>()
  /**
   *  Заглушка для хранения даты начала события
   */
  public start: any
  /**
   *   Переменная для хранения отредактированного заголовка
   */
  public editedTitle: string = '';
  /**
   *   Переменная для хранения ссылки на модальное окно
   */
  public modalRef?: BsModalRef;
  /**
   *   Переменная для хранения текущего заголовка
   */
  public title: any;
  /**
   *   Массив событий для отображения на календаре
   */
  events: any = [
    {
      title: 'Present', date: '2023-11-05', color: '#0000FF'
    },
    {
      title: 'Absent', date: '2023-11-06', color: '#0000FF'
    },
    {
      title: 'Presents', date: '2023-11-07', color: '#FF0000'
    },
  ]
  /**
   *  Настройки календаря
   */
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    events: this.events,
    eventClick: this.handleDateClick.bind(this)
  };
  /**
   * Настройки для модального окна
   */
  config = {
    animated: true
  };

  constructor(private modalService: BsModalService) {
  }

  /**
   *  Метод обработки клика по событию в календаре
   * @param arg
   */
  handleDateClick(arg: any) {
    this.title = arg.event._def.title;
    this.start = arg.event.start;
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  /**
   *  Метод для редактирования события
   */
  editWindow() {
    this.title = this.editedTitle;
    console.log('Данные сохранены!');
    this.modalRef?.hide();
  }

  /**
   *  Метод для удаления события
   */
  removePost() {
    console.log('Данные удалены!');
    this.modalRef?.hide();
  }
}
