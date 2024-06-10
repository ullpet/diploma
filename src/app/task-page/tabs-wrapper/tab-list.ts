interface Tab {
  title: string;
  id: string;
}

export const TabList: Tab[] = [
  {
    title: 'Перс. данные',
    id: 'personal-info'
  },
  {
    title: 'Данные по заявкам',
    id: 'applications-info'
  },
  {
    title: 'Работа',
    id: 'job'
  },
  {
    title: 'Счета',
    id: 'accounts'
  },
  {
    title: 'Вложения',
    id: 'attachments'
  },
  {
    title: 'Результат звонка',
    id: 'call-result'
  },
]
