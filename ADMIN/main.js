new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'myfirstchart',
    
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: [
      { year: '2017', value: 40 },
      { year: '2018', value: 30 },
      { year: '2019', value: 25 },
      { year: '2020', value: 25 },
      { year: '2021', value: 40 }
    ],
    // The name of the data record attribute that contains x-values.
    xkey: 'year',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Value']
  });

  Morris.Donut({
    element: 'donut-example',
    data: [
      {label: "New Students this year", value: 46},
      {label: "Staff", value: 27},
      {label: "Old Students", value: 215}
    ]
  });