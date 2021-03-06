=================
    LineChart
=================

A line chart. The chart plots a line for each specified **y** field
against a single **x** field.

Example
=======

.. raw:: html

    <div id="linechart-example"></div>
    <script type="text/javascript" >
      var el = document.getElementById('linechart-example');

      var data = [];
      for (var d = 0; d < 10; d += 1) data.push({a: d, b: d});

      var vis = new candela.components.LineChart(el, {
        data: data, x: 'a', y: ['b'],
        width: 700, height: 400});
      vis.render();
    </script>

**ES6/Webpack**

.. code-block:: js

    import LineChart from candela.components.LineChart

    let el = document.createElement('div');
    document.body.appendChild(el);

    let data = [];
    for (var d = 0; d < 10; d += 1) data.push({a: d, b: d});

    let vis = new LineChart(el, {
      data: data, x: 'a', y: ['b'],
      width: 700, height: 400
    });
    vis.render();

**ES5**

.. code-block:: js

    var el = document.createElement('div')
    document.body.appendChild(el);

    var data = [];
    for (var d = 0; d < 10; d += 1) data.push({a: d, b: d});

    var vis = new candela.components.LineChart(el, {
      data: data, x: 'a', y: ['b'],
      width: 700, height: 400
    });
    vis.render();

**Python**

.. code-block:: python

    import candela

    data = [{'a': d, 'b': d} for d in range(10)]

    candela.components.LineChart(
        data=data, x='a', y=['b'], width=700, height=400)

**R**

.. code-block:: r

    library(candela)

    candela('LineChart', data=mtcars, x='mpg', y=list('wt'), color='disp')

Options
=======

data (:ref:`Table <table>`)
    The data table.

x (String)
    The field containing x-coordinates for the lines. The field must contain
    date or numeric data. See :ref:`axis scales`.

y (Array of String)
    The fields containing y-coordinates for the lines. The fields must contain
    date or numeric data. See :ref:`axis scales`.

hover (Array of String)
    The fields to display on hover.

width (Number)
    Width of the chart in pixels. See :ref:`sizing`.

height (Number)
    Height of the chart in pixels. See :ref:`sizing`.

renderer (String)
    Whether to render in ``"svg"`` or ``"canvas"`` mode (default ``"canvas"``).
