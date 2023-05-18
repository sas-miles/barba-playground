import InfiniteAjaxScroll from '@webcreate/infinite-ajax-scroll'

new InfiniteAjaxScroll('.infinite-wrap', {
  item: '.main-content-container',
  next: '.infinite-next',
  prev: '.infinite-prev',
  pagination: '.infinite-pagination',
  negativeMargin: 400,
})
