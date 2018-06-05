var dim = {
    width: 960, height: 500,
    margin: { top: 20, right: 50, bottom: 30, left: 50 },
    ohlc: { height: 305 },
    indicator: { height: 65, padding: 5 }
};
dim.plot = {
    width: dim.width - dim.margin.left - dim.margin.right,
    height: dim.height - dim.margin.top - dim.margin.bottom
};
dim.indicator.top = dim.ohlc.height+dim.indicator.padding;
dim.indicator.bottom = dim.indicator.top+dim.indicator.height+dim.indicator.padding;

var indicatorTop = d3.scaleLinear()
        .range([dim.indicator.top, dim.indicator.bottom]);

var parseDate = d3.timeParse("%d-%b-%y");

var zoom = d3.zoom()
        .on("zoom", zoomed);

var x = techan.scale.financetime()
        .range([0, dim.plot.width]);

var y = d3.scaleLinear()
        .range([dim.ohlc.height, 0]);


var yPercent = y.copy();   // Same as y at this stage, will get a different domain later

var yInit, yPercentInit, zoomableInit;

var yVolume = d3.scaleLinear()
        .range([y(0), y(0.2)]);

var candlestick = techan.plot.candlestick()
        .xScale(x)
        .yScale(y);

var tradearrow = techan.plot.tradearrow()
        .xScale(x)
        .yScale(y)
        .y(function(d) {
            // Display the buy and sell arrows a bit above and below the price, so the price is still visible
            if(d.type === 'buy') return y(d.low)+5;
            if(d.type === 'sell') return y(d.high)-5;
            else return y(d.price);
        });
        
        var sma0 = techan.plot.sma()
        .xScale(x)
        .yScale(y);

var sma1 = techan.plot.sma()
        .xScale(x)
        .yScale(y);

var ema2 = techan.plot.ema()
        .xScale(x)
        .yScale(y);

var volume = techan.plot.volume()
        .accessor(candlestick.accessor())   // Set the accessor to a ohlc accessor so we get highlighted bars
        .xScale(x)
        .yScale(yVolume);

var trendline = techan.plot.trendline()
        .xScale(x)
        .yScale(y);

var supstance = techan.plot.supstance()
        .xScale(x)
        .yScale(y);

var xAxis = d3.axisBottom(x);

var timeAnnotation = techan.plot.axisannotation()
        .axis(xAxis)
        .orient('bottom')
        .format(d3.timeFormat('%Y-%m-%d'))
        .width(65)
        .translate([0, dim.plot.height]);

var yAxis = d3.axisRight(y);

var ohlcAnnotation = techan.plot.axisannotation()
        .axis(yAxis)
        .orient('right')
        .format(d3.format(',.2f'))
        .translate([x(1), 0]);

var closeAnnotation = techan.plot.axisannotation()
        .axis(yAxis)
        .orient('right')
        .accessor(candlestick.accessor())
        .format(d3.format(',.2f'))
        .translate([x(1), 0]);

var percentAxis = d3.axisLeft(yPercent)
        .tickFormat(d3.format('+.1%'));

var percentAnnotation = techan.plot.axisannotation()
        .axis(percentAxis)
        .orient('left');

/* var volumeAxis = d3.axisRight(yVolume)
        .ticks(3)
        .tickFormat(d3.format(",.3s"));

var volumeAnnotation = techan.plot.axisannotation()
        .axis(volumeAxis)
        .orient("right")
        .width(35); */

var macdScale = d3.scaleLinear()
        .range([indicatorTop(0)+dim.indicator.height, indicatorTop(0)]);

var rsiScale = macdScale.copy()
        .range([indicatorTop(1)+dim.indicator.height, indicatorTop(1)]);

var macd = techan.plot.macd()
        .xScale(x)
        .yScale(macdScale);

var macdAxis = d3.axisRight(macdScale)
        .ticks(3);

var macdAnnotation = techan.plot.axisannotation()
        .axis(macdAxis)
        .orient("right")
        .format(d3.format(',.2f'))
        .translate([x(1), 0]);

var macdAxisLeft = d3.axisLeft(macdScale)
        .ticks(3);

var macdAnnotationLeft = techan.plot.axisannotation()
        .axis(macdAxisLeft)
        .orient("left")
        .format(d3.format(',.2f'));

var rsi = techan.plot.rsi()
        .xScale(x)
        .yScale(rsiScale);

var rsiAxis = d3.axisRight(rsiScale)
        .ticks(3);

var rsiAnnotation = techan.plot.axisannotation()
        .axis(rsiAxis)
        .orient("right")
        .format(d3.format(',.2f'))
        .translate([x(1), 0]);

var rsiAxisLeft = d3.axisLeft(rsiScale)
        .ticks(3);

var rsiAnnotationLeft = techan.plot.axisannotation()
        .axis(rsiAxisLeft)
        .orient("left")
        .format(d3.format(',.2f'));

var ohlcCrosshair = techan.plot.crosshair()
        .xScale(timeAnnotation.axis().scale())
        .yScale(ohlcAnnotation.axis().scale())
        .xAnnotation(timeAnnotation)
        //.yAnnotation([ohlcAnnotation, percentAnnotation, volumeAnnotation])
        .verticalWireRange([0, dim.plot.height]);

var macdCrosshair = techan.plot.crosshair()
        .xScale(timeAnnotation.axis().scale())
        .yScale(macdAnnotation.axis().scale())
        .xAnnotation(timeAnnotation)
        .yAnnotation([macdAnnotation, macdAnnotationLeft])
        .verticalWireRange([0, dim.plot.height]);

var rsiCrosshair = techan.plot.crosshair()
        .xScale(timeAnnotation.axis().scale())
        .yScale(rsiAnnotation.axis().scale())
        .xAnnotation(timeAnnotation)
        .yAnnotation([rsiAnnotation, rsiAnnotationLeft])
        .verticalWireRange([0, dim.plot.height]);

var svg = d3.select("body").append("svg")
        .attr("width", dim.width)
        .attr("height", dim.height);

var defs = svg.append("defs");

defs.append("clipPath")
    .attr("id", "ohlcClip")
.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", dim.plot.width)
    .attr("height", dim.ohlc.height);

defs.selectAll("indicatorClip").data([0, 1])
.enter()
    .append("clipPath")
    .attr("id", function(d, i) { return "indicatorClip-" + i; })
.append("rect")
    .attr("x", 0)
    .attr("y", function(d, i) { return indicatorTop(i); })
    .attr("width", dim.plot.width)
    .attr("height", dim.indicator.height);

svg = svg.append("g")
    .attr("transform", "translate(" + dim.margin.left + "," + dim.margin.top + ")");

svg.append('text')
    .attr("class", "symbol")
    .attr("x", 20)
    .text("Zolo Trader");

svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + dim.plot.height + ")");

var ohlcSelection = svg.append("g")
    .attr("class", "ohlc")
    .attr("transform", "translate(0,0)");

ohlcSelection.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + x(1) + ",0)")
.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -15)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Closed");

ohlcSelection.append("g")
    .attr("class", "close annotation up");

/* ohlcSelection.append("g")
    .attr("class", "volume")
    .attr("clip-path", "url(#ohlcClip)"); */

ohlcSelection.append("g")
    .attr("class", "candlestick")
    .attr("clip-path", "url(#ohlcClip)");

ohlcSelection.append("g")
    .attr("class", "indicator sma ma-0")
    .attr("clip-path", "url(#ohlcClip)");

ohlcSelection.append("g")
    .attr("class", "indicator sma ma-1")
    .attr("clip-path", "url(#ohlcClip)");

ohlcSelection.append("g")
    .attr("class", "indicator ema ma-2")
    .attr("clip-path", "url(#ohlcClip)");

ohlcSelection.append("g")
    .attr("class", "percent axis");

/* ohlcSelection.append("g")
    .attr("class", "volume axis"); */

var indicatorSelection = svg.selectAll("svg > g.indicator").data(["macd", "rsi"]).enter()
     .append("g")
        .attr("class", function(d) { return d + " indicator"; });

indicatorSelection.append("g")
    .attr("class", "axis right")
    .attr("transform", "translate(" + x(1) + ",0)");

indicatorSelection.append("g")
    .attr("class", "axis left")
    .attr("transform", "translate(" + x(0) + ",0)");

indicatorSelection.append("g")
    .attr("class", "indicator-plot")
    .attr("clip-path", function(d, i) { return "url(#indicatorClip-" + i + ")"; });

// Add trendlines and other interactions last to be above zoom pane
svg.append('g')
    .attr("class", "crosshair ohlc");

svg.append("g")
    .attr("class", "tradearrow")
    .attr("clip-path", "url(#ohlcClip)");

svg.append('g')
    .attr("class", "crosshair macd");

svg.append('g')
    .attr("class", "crosshair rsi");

svg.append("g")
    .attr("class", "trendlines analysis")
    .attr("clip-path", "url(#ohlcClip)");
svg.append("g")
    .attr("class", "supstances analysis")
    .attr("clip-path", "url(#ohlcClip)");
        
    //Apply API call to retrive this data and add to your tick history 
        var tickHistory = [{"timestamp":"2018-06-04T04:48:00.000Z","open":"7699.5","close":"7699","min":"7699","max":"7699.6"},{"timestamp":"2018-06-04T04:49:00.000Z","open":"7698","close":"7695.3","min":"7695.3","max":"7699.6"},{"timestamp":"2018-06-04T04:50:00.000Z","open":"7699.6","close":"7699.5","min":"7699.5","max":"7699.6"},{"timestamp":"2018-06-04T04:51:00.000Z","open":"7699.5","close":"7695.5","min":"7695.5","max":"7699.6"},{"timestamp":"2018-06-04T04:52:00.000Z","open":"7699.5","close":"7695.4","min":"7695.4","max":"7699.6"},{"timestamp":"2018-06-04T04:53:00.000Z","open":"7699.5","close":"7699.5","min":"7695.5","max":"7699.6"},{"timestamp":"2018-06-04T04:54:00.000Z","open":"7699.6","close":"7699.6","min":"7695.5","max":"7699.6"},{"timestamp":"2018-06-04T04:55:00.000Z","open":"7699.6","close":"7699.7","min":"7699.6","max":"7699.7"},{"timestamp":"2018-06-04T04:56:00.000Z","open":"7699.6","close":"7696.4","min":"7695.6","max":"7699.6"},{"timestamp":"2018-06-04T04:57:00.000Z","open":"7699.6","close":"7696.7","min":"7696.5","max":"7701.7"},{"timestamp":"2018-06-04T04:58:00.000Z","open":"7701.6","close":"7699","min":"7699","max":"7701.7"},{"timestamp":"2018-06-04T04:59:00.000Z","open":"7702.7","close":"7702.5","min":"7699","max":"7702.7"},{"timestamp":"2018-06-04T05:00:00.000Z","open":"7702.5","close":"7698.9","min":"7698.9","max":"7702.5"},{"timestamp":"2018-06-04T05:01:00.000Z","open":"7701.8","close":"7701.7","min":"7698.6","max":"7701.8"},{"timestamp":"2018-06-04T05:02:00.000Z","open":"7701.7","close":"7701.7","min":"7701.7","max":"7701.8"},{"timestamp":"2018-06-04T05:03:00.000Z","open":"7701.7","close":"7697.65173436","min":"7695.3","max":"7701.7"},{"timestamp":"2018-06-04T05:04:00.000Z","open":"7697.65173436","close":"7697.65173436","min":"7697.65173436","max":"7697.7"},{"timestamp":"2018-06-04T05:05:00.000Z","open":"7694.7","close":"7697.7","min":"7694.7","max":"7697.7"},{"timestamp":"2018-06-04T05:06:00.000Z","open":"7697.7","close":"7697.7","min":"7693.5","max":"7697.7"},{"timestamp":"2018-06-04T05:07:00.000Z","open":"7697.7","close":"7697.65173436","min":"7693.6","max":"7697.7"},{"timestamp":"2018-06-04T05:08:00.000Z","open":"7697.65173436","close":"7697.7","min":"7692.2","max":"7697.7"},{"timestamp":"2018-06-04T05:09:00.000Z","open":"7697.65173436","close":"7697.6","min":"7694.7","max":"7697.7"},{"timestamp":"2018-06-04T05:10:00.000Z","open":"7697.7","close":"7697.6","min":"7697.6","max":"7697.7"},{"timestamp":"2018-06-04T05:11:00.000Z","open":"7697.6","close":"7692.2","min":"7692.2","max":"7697.7"},{"timestamp":"2018-06-04T05:12:00.000Z","open":"7697","close":"7689.6","min":"7689.6","max":"7697.1"},{"timestamp":"2018-06-04T05:13:00.000Z","open":"7694.2","close":"7689","min":"7686","max":"7694.3"},{"timestamp":"2018-06-04T05:14:00.000Z","open":"7689","close":"7687.6","min":"7686","max":"7689.1"},{"timestamp":"2018-06-04T05:15:00.000Z","open":"7687.6","close":"7690.3","min":"7687.5","max":"7690.3"},{"timestamp":"2018-06-04T05:16:00.000Z","open":"7690.2","close":"7691.1","min":"7683.1","max":"7691.8"},{"timestamp":"2018-06-04T05:17:00.000Z","open":"7691.2","close":"7690.8","min":"7690.7","max":"7691.2"},{"timestamp":"2018-06-04T05:18:00.000Z","open":"7691.1","close":"7692.5","min":"7685.2","max":"7692.5"},{"timestamp":"2018-06-04T05:19:00.000Z","open":"7692.6","close":"7685.4","min":"7685.4","max":"7696.5"},{"timestamp":"2018-06-04T05:20:00.000Z","open":"7696.1","close":"7696.1","min":"7696","max":"7696.2"},{"timestamp":"2018-06-04T05:21:00.000Z","open":"7695.9","close":"7695.9","min":"7695.9","max":"7695.9"},{"timestamp":"2018-06-04T05:22:00.000Z","open":"7696","close":"7697.7","min":"7696","max":"7697.8"},{"timestamp":"2018-06-04T05:23:00.000Z","open":"7697.7","close":"7700.6","min":"7687.9","max":"7700.6"},{"timestamp":"2018-06-04T05:24:00.000Z","open":"7700.53788587","close":"7700.5","min":"7700.4","max":"7700.53788587"},{"timestamp":"2018-06-04T05:25:00.000Z","open":"7700.4","close":"7700.4","min":"7700.4","max":"7700.5"},{"timestamp":"2018-06-04T05:26:00.000Z","open":"7699.1","close":"7697.9","min":"7695.4","max":"7699.1"},{"timestamp":"2018-06-04T05:27:00.000Z","open":"7697.9","close":"7685.8","min":"7685.8","max":"7697.96538821"},{"timestamp":"2018-06-04T05:28:00.000Z","open":"7697.4","close":"7693.4","min":"7685.7","max":"7697.4"},{"timestamp":"2018-06-04T05:29:00.000Z","open":"7693.4","close":"7690","min":"7690","max":"7693.4"},{"timestamp":"2018-06-04T05:30:00.000Z","open":"7693.4","close":"7693.4","min":"7686.3","max":"7693.5"},{"timestamp":"2018-06-04T05:31:00.000Z","open":"7693.4","close":"7686.4","min":"7686.3","max":"7693.40505145"},{"timestamp":"2018-06-04T05:32:00.000Z","open":"7693.4","close":"7693.4","min":"7693.4","max":"7693.5"},{"timestamp":"2018-06-04T05:33:00.000Z","open":"7693.4","close":"7683.6","min":"7683.6","max":"7693.4"},{"timestamp":"2018-06-04T05:34:00.000Z","open":"7689.5","close":"7689.5","min":"7689.4","max":"7689.5"},{"timestamp":"2018-06-04T05:35:00.000Z","open":"7689.5","close":"7689.6","min":"7684.5","max":"7689.6"},{"timestamp":"2018-06-04T05:36:00.000Z","open":"7689.7","close":"7689.6","min":"7682.7","max":"7689.7"},{"timestamp":"2018-06-04T05:37:00.000Z","open":"7689.7","close":"7689.7","min":"7682","max":"7689.7"},{"timestamp":"2018-06-04T05:38:00.000Z","open":"7689.7","close":"7688","min":"7683.4","max":"7689.7"},{"timestamp":"2018-06-04T05:39:00.000Z","open":"7689.7","close":"7694","min":"7689.7","max":"7694"},{"timestamp":"2018-06-04T05:40:00.000Z","open":"7693.9","close":"7682.6","min":"7682.6","max":"7693.9"},{"timestamp":"2018-06-04T05:41:00.000Z","open":"7682.7","close":"7682.76266685","min":"7682.67146921","max":"7688.9"},{"timestamp":"2018-06-04T05:42:00.000Z","open":"7682.76266685","close":"7686.5","min":"7682.7","max":"7688.9"},{"timestamp":"2018-06-04T05:43:00.000Z","open":"7686.41057239","close":"7682.6","min":"7682.6","max":"7688.9"},{"timestamp":"2018-06-04T05:44:00.000Z","open":"7682.6","close":"7688.9","min":"7682.4","max":"7688.9"},{"timestamp":"2018-06-04T05:45:00.000Z","open":"7685","close":"7687.4","min":"7685","max":"7689"},{"timestamp":"2018-06-04T05:46:00.000Z","open":"7687.4","close":"7685.2","min":"7684.1","max":"7689"},{"timestamp":"2018-06-04T05:47:00.000Z","open":"7685.6","close":"7688.9","min":"7685.6","max":"7688.9"},{"timestamp":"2018-06-04T05:48:00.000Z","open":"7685.9","close":"7688.9","min":"7684.4","max":"7688.9"},{"timestamp":"2018-06-04T05:49:00.000Z","open":"7684.5","close":"7688.9","min":"7684.4","max":"7688.9"},{"timestamp":"2018-06-04T05:50:00.000Z","open":"7684.4","close":"7682.5","min":"7679.4","max":"7688.9"},{"timestamp":"2018-06-04T05:51:00.000Z","open":"7682.5","close":"7681.8","min":"7680","max":"7682.6"},{"timestamp":"2018-06-04T05:52:00.000Z","open":"7681.9","close":"7672.2","min":"7672","max":"7681.9"},{"timestamp":"2018-06-04T05:53:00.000Z","open":"7672.2","close":"7624.70086498","min":"7616.1","max":"7674.8"},{"timestamp":"2018-06-04T05:54:00.000Z","open":"7624.8","close":"7640.1","min":"7595.9","max":"7640.1"},{"timestamp":"2018-06-04T05:55:00.000Z","open":"7641.1","close":"7642.9","min":"7625.5","max":"7647"},{"timestamp":"2018-06-04T05:56:00.000Z","open":"7643.6","close":"7653","min":"7640.5","max":"7653.4"},{"timestamp":"2018-06-04T05:57:00.000Z","open":"7652.4","close":"7664.8","min":"7646.7","max":"7665.3"},{"timestamp":"2018-06-04T05:58:00.000Z","open":"7664.9","close":"7665.7","min":"7657.7","max":"7673.9"},{"timestamp":"2018-06-04T05:59:00.000Z","open":"7671.25390559","close":"7663.7","min":"7662.8","max":"7671.5"},{"timestamp":"2018-06-04T06:00:00.000Z","open":"7663.7","close":"7657.3","min":"7657.3","max":"7664"},{"timestamp":"2018-06-04T06:01:00.000Z","open":"7657.4","close":"7655","min":"7649.1","max":"7657.4"},{"timestamp":"2018-06-04T06:02:00.000Z","open":"7654.9","close":"7657.6","min":"7652.2","max":"7657.7"},{"timestamp":"2018-06-04T06:03:00.000Z","open":"7657.6","close":"7657.5","min":"7653.3","max":"7657.6"},{"timestamp":"2018-06-04T06:04:00.000Z","open":"7657.5","close":"7652.1","min":"7652.1","max":"7657.6"},{"timestamp":"2018-06-04T06:05:00.000Z","open":"7652.1","close":"7646.1","min":"7643.1","max":"7652.2"},{"timestamp":"2018-06-04T06:06:00.000Z","open":"7646.3","close":"7649.1","min":"7643.4","max":"7650.8"},{"timestamp":"2018-06-04T06:07:00.000Z","open":"7649.1","close":"7642.9","min":"7642.8","max":"7649.2"},{"timestamp":"2018-06-04T06:08:00.000Z","open":"7642.9","close":"7635.8","min":"7635","max":"7645"},{"timestamp":"2018-06-04T06:09:00.000Z","open":"7635.82313668","close":"7648.6","min":"7626.9","max":"7651.1"},{"timestamp":"2018-06-04T06:10:00.000Z","open":"7648.5","close":"7649.5","min":"7639.5","max":"7651.4"},{"timestamp":"2018-06-04T06:11:00.000Z","open":"7649.6","close":"7649.5","min":"7639.9","max":"7650"},{"timestamp":"2018-06-04T06:12:00.000Z","open":"7649.5","close":"7654.9","min":"7640.6","max":"7655"},{"timestamp":"2018-06-04T06:13:00.000Z","open":"7654.9","close":"7654.2","min":"7644.9","max":"7654.9"},{"timestamp":"2018-06-04T06:14:00.000Z","open":"7654.1","close":"7654.1","min":"7654.1","max":"7655"},{"timestamp":"2018-06-04T06:15:00.000Z","open":"7654","close":"7654.6","min":"7647.4","max":"7654.9"},{"timestamp":"2018-06-04T06:16:00.000Z","open":"7654.7","close":"7663.4","min":"7649.4","max":"7666.69668261"},{"timestamp":"2018-06-04T06:17:00.000Z","open":"7663.4","close":"7662.2","min":"7656.5","max":"7665.9"},{"timestamp":"2018-06-04T06:18:00.000Z","open":"7662.2","close":"7662","min":"7655","max":"7662.2"},{"timestamp":"2018-06-04T06:19:00.000Z","open":"7662","close":"7662","min":"7655","max":"7662.1"},{"timestamp":"2018-06-04T06:20:00.000Z","open":"7662","close":"7662","min":"7655","max":"7665.1"},{"timestamp":"2018-06-04T06:21:00.000Z","open":"7662","close":"7662.1","min":"7655.5","max":"7662.1"},{"timestamp":"2018-06-04T06:22:00.000Z","open":"7662.1","close":"7663.2","min":"7655.1","max":"7664.7"},{"timestamp":"2018-06-04T06:23:00.000Z","open":"7663.2","close":"7654.9","min":"7643.5","max":"7663.2"},{"timestamp":"2018-06-04T06:24:00.000Z","open":"7654","close":"7654","min":"7654","max":"7654.1"},{"timestamp":"2018-06-04T06:25:00.000Z","open":"7654.1","close":"7654.1","min":"7643.5","max":"7655.9"},{"timestamp":"2018-06-04T06:26:00.000Z","open":"7654","close":"7654","min":"7642","max":"7654.1"},{"timestamp":"2018-06-04T06:27:00.000Z","open":"7654.1","close":"7640.6","min":"7640.6","max":"7654.1"},{"timestamp":"2018-06-04T06:28:00.000Z","open":"7642.2","close":"7650.3","min":"7642.2","max":"7650.3"},{"timestamp":"2018-06-04T06:29:00.000Z","open":"7650.3","close":"7649.7","min":"7644.3","max":"7650.3"},{"timestamp":"2018-06-04T06:30:00.000Z","open":"7649.7","close":"7649.4","min":"7639.1","max":"7649.7"},{"timestamp":"2018-06-04T06:31:00.000Z","open":"7649.5","close":"7649.4","min":"7638.6","max":"7649.5"},{"timestamp":"2018-06-04T06:32:00.000Z","open":"7649.4","close":"7636.2","min":"7636.1","max":"7649.48796803"},{"timestamp":"2018-06-04T06:33:00.000Z","open":"7638.4","close":"7634.9","min":"7633.1","max":"7638.4"},{"timestamp":"2018-06-04T06:34:00.000Z","open":"7634.9","close":"7631.9","min":"7625.2","max":"7639.7"},{"timestamp":"2018-06-04T06:35:00.000Z","open":"7632","close":"7621.8","min":"7621.5","max":"7632.8"},{"timestamp":"2018-06-04T06:36:00.000Z","open":"7630.5","close":"7616.94239282","min":"7609.8","max":"7630.6"},{"timestamp":"2018-06-04T06:37:00.000Z","open":"7616.94239282","close":"7616.9","min":"7608.2","max":"7620.1"},{"timestamp":"2018-06-04T06:38:00.000Z","open":"7616.9","close":"7612","min":"7603.6","max":"7616.9"},{"timestamp":"2018-06-04T06:39:00.000Z","open":"7612","close":"7580.2","min":"7552.8","max":"7612"},{"timestamp":"2018-06-04T06:40:00.000Z","open":"7577.6","close":"7600.5","min":"7571.2","max":"7600.6"},{"timestamp":"2018-06-04T06:41:00.000Z","open":"7601.2","close":"7606.18234768","min":"7592.8","max":"7606.18234768"},{"timestamp":"2018-06-04T06:42:00.000Z","open":"7606.1","close":"7607.5","min":"7596.3","max":"7608.5"},{"timestamp":"2018-06-04T06:43:00.000Z","open":"7607.5","close":"7608.5","min":"7600.6","max":"7608.5"},{"timestamp":"2018-06-04T06:44:00.000Z","open":"7600.6","close":"7604.48849122","min":"7599.8","max":"7608.5"},{"timestamp":"2018-06-04T06:45:00.000Z","open":"7604.5","close":"7591.2","min":"7589.2","max":"7604.5"},{"timestamp":"2018-06-04T06:46:00.000Z","open":"7591.2","close":"7597.2","min":"7591.2","max":"7603.63188222"},{"timestamp":"2018-06-04T06:47:00.000Z","open":"7597.1","close":"7595.2","min":"7589.9","max":"7597.1"},{"timestamp":"2018-06-04T06:48:00.000Z","open":"7597","close":"7590.5","min":"7589.4","max":"7600"},{"timestamp":"2018-06-04T06:49:00.000Z","open":"7598.8","close":"7598.6","min":"7598.5","max":"7598.9"},{"timestamp":"2018-06-04T06:50:00.000Z","open":"7598.5","close":"7608.5","min":"7591.2","max":"7608.5"},{"timestamp":"2018-06-04T06:51:00.000Z","open":"7608.5","close":"7612.5","min":"7604.6","max":"7619.4"},{"timestamp":"2018-06-04T06:52:00.000Z","open":"7612.51739598","close":"7614.2","min":"7608","max":"7614.3"},{"timestamp":"2018-06-04T06:53:00.000Z","open":"7614.3","close":"7611.5","min":"7602.4","max":"7614.3"},{"timestamp":"2018-06-04T06:54:00.000Z","open":"7611.6","close":"7611","min":"7603.4","max":"7611.69944882"},{"timestamp":"2018-06-04T06:55:00.000Z","open":"7611","close":"7603.3","min":"7603.3","max":"7611.1"},{"timestamp":"2018-06-04T06:56:00.000Z","open":"7606.1","close":"7609.7","min":"7600.1","max":"7610.1"},{"timestamp":"2018-06-04T06:57:00.000Z","open":"7610.1","close":"7610.2","min":"7601.2","max":"7610.2"},{"timestamp":"2018-06-04T06:58:00.000Z","open":"7610.2","close":"7617.5","min":"7602.4","max":"7619.9"},{"timestamp":"2018-06-04T06:59:00.000Z","open":"7617.5","close":"7578.4","min":"7548.9","max":"7617.5"},{"timestamp":"2018-06-04T07:00:00.000Z","open":"7578.4","close":"7597.6","min":"7573.1","max":"7597.6"},{"timestamp":"2018-06-04T07:01:00.000Z","open":"7597.5","close":"7597.6","min":"7591.9","max":"7597.6"},{"timestamp":"2018-06-04T07:02:00.000Z","open":"7597.6","close":"7597.6","min":"7596","max":"7597.6"},{"timestamp":"2018-06-04T07:03:00.000Z","open":"7597.6","close":"7597.5","min":"7592.8","max":"7597.6"},{"timestamp":"2018-06-04T07:04:00.000Z","open":"7597.5","close":"7597","min":"7590.1","max":"7597.6"},{"timestamp":"2018-06-04T07:05:00.000Z","open":"7597","close":"7591.2","min":"7591.1","max":"7597.5"},{"timestamp":"2018-06-04T07:06:00.000Z","open":"7597.5","close":"7600.3","min":"7593","max":"7600.3"},{"timestamp":"2018-06-04T07:07:00.000Z","open":"7600.3","close":"7605.8","min":"7593","max":"7605.8"},{"timestamp":"2018-06-04T07:08:00.000Z","open":"7605.76483665","close":"7611.4","min":"7596","max":"7611.9"},{"timestamp":"2018-06-04T07:09:00.000Z","open":"7611.4","close":"7604.8","min":"7600","max":"7611.4"},{"timestamp":"2018-06-04T07:10:00.000Z","open":"7606.1","close":"7607.9","min":"7606.1","max":"7607.9"},{"timestamp":"2018-06-04T07:11:00.000Z","open":"7607.9","close":"7607.7","min":"7600.5","max":"7608.8"},{"timestamp":"2018-06-04T07:12:00.000Z","open":"7607.7","close":"7606.8","min":"7602.1","max":"7607.7"},{"timestamp":"2018-06-04T07:13:00.000Z","open":"7606.8","close":"7602.9","min":"7602","max":"7606.8"},{"timestamp":"2018-06-04T07:14:00.000Z","open":"7606.8","close":"7595.9","min":"7595.9","max":"7606.81672883"},{"timestamp":"2018-06-04T07:15:00.000Z","open":"7595.9","close":"7595.2","min":"7595.2","max":"7605.65450343"},{"timestamp":"2018-06-04T07:16:00.000Z","open":"7598.4","close":"7605.7","min":"7595.3","max":"7605.7"},{"timestamp":"2018-06-04T07:17:00.000Z","open":"7605.6","close":"7599","min":"7597.1","max":"7606.7"},{"timestamp":"2018-06-04T07:18:00.000Z","open":"7606.6","close":"7606.9","min":"7599.7","max":"7606.9"},{"timestamp":"2018-06-04T07:19:00.000Z","open":"7607","close":"7607","min":"7599.6","max":"7607"},{"timestamp":"2018-06-04T07:20:00.000Z","open":"7607","close":"7610","min":"7599.7","max":"7610"},{"timestamp":"2018-06-04T07:21:00.000Z","open":"7603","close":"7612.9","min":"7602.9","max":"7613"},{"timestamp":"2018-06-04T07:22:00.000Z","open":"7612.9","close":"7612.6","min":"7603.9","max":"7612.9"},{"timestamp":"2018-06-04T07:23:00.000Z","open":"7612.7","close":"7609.7","min":"7604.1","max":"7613"},{"timestamp":"2018-06-04T07:24:00.000Z","open":"7612.8","close":"7613","min":"7610","max":"7613"},{"timestamp":"2018-06-04T07:25:00.000Z","open":"7613","close":"7610","min":"7609.8","max":"7613.9"},{"timestamp":"2018-06-04T07:26:00.000Z","open":"7613.7","close":"7612.5","min":"7609.9","max":"7613.7"},{"timestamp":"2018-06-04T07:27:00.000Z","open":"7612.4","close":"7609.6","min":"7609.6","max":"7612.5"},{"timestamp":"2018-06-04T07:28:00.000Z","open":"7612.42395882","close":"7612.4","min":"7608","max":"7613"},{"timestamp":"2018-06-04T07:29:00.000Z","open":"7612.42395882","close":"7612.4","min":"7612.4","max":"7612.42395882"},{"timestamp":"2018-06-04T07:30:00.000Z","open":"7612.4","close":"7612.4","min":"7612.4","max":"7612.42395882"},{"timestamp":"2018-06-04T07:31:00.000Z","open":"7612.4","close":"7612.8","min":"7608","max":"7613"},{"timestamp":"2018-06-04T07:32:00.000Z","open":"7612.8","close":"7612.89702741","min":"7612.8","max":"7612.9"},{"timestamp":"2018-06-04T07:33:00.000Z","open":"7612.89702741","close":"7613.9","min":"7608","max":"7613.9"},{"timestamp":"2018-06-04T07:34:00.000Z","open":"7610","close":"7612.8","min":"7610","max":"7613.9"},{"timestamp":"2018-06-04T07:35:00.000Z","open":"7612.9","close":"7614.7","min":"7603.3","max":"7614.8"},{"timestamp":"2018-06-04T07:36:00.000Z","open":"7614.8","close":"7610","min":"7610","max":"7620"},{"timestamp":"2018-06-04T07:37:00.000Z","open":"7619.92691263","close":"7623.8","min":"7610","max":"7627.3"},{"timestamp":"2018-06-04T07:38:00.000Z","open":"7623.9","close":"7619.6","min":"7612.2","max":"7623.9"},{"timestamp":"2018-06-04T07:39:00.000Z","open":"7619.7","close":"7613","min":"7613","max":"7619.7"},{"timestamp":"2018-06-04T07:40:00.000Z","open":"7619.1","close":"7619.6","min":"7613.1","max":"7619.6"},{"timestamp":"2018-06-04T07:41:00.000Z","open":"7619.7","close":"7619.4","min":"7613.7","max":"7619.8"},{"timestamp":"2018-06-04T07:42:00.000Z","open":"7618.5","close":"7616.5","min":"7616.5","max":"7618.6"},{"timestamp":"2018-06-04T07:43:00.000Z","open":"7618.5","close":"7618.5","min":"7611.4","max":"7618.6"},{"timestamp":"2018-06-04T07:44:00.000Z","open":"7618.5","close":"7618.5","min":"7618.5","max":"7618.6"},{"timestamp":"2018-06-04T07:45:00.000Z","open":"7618.6","close":"7618.5","min":"7612.5","max":"7618.7"},{"timestamp":"2018-06-04T07:46:00.000Z","open":"7618.5","close":"7618.4","min":"7612.2","max":"7618.6"},{"timestamp":"2018-06-04T07:47:00.000Z","open":"7618.4","close":"7616.3","min":"7612.2","max":"7618.4"},{"timestamp":"2018-06-04T07:48:00.000Z","open":"7616.3","close":"7612.2","min":"7610","max":"7616.3"},{"timestamp":"2018-06-04T07:49:00.000Z","open":"7616.3","close":"7610","min":"7610","max":"7616.3"},{"timestamp":"2018-06-04T07:50:00.000Z","open":"7612.9","close":"7606.9","min":"7606.9","max":"7613.2"},{"timestamp":"2018-06-04T07:51:00.000Z","open":"7612","close":"7612.1","min":"7611.6","max":"7612.1"},{"timestamp":"2018-06-04T07:52:00.000Z","open":"7612.1","close":"7612.1","min":"7607.5","max":"7612.1"},{"timestamp":"2018-06-04T07:53:00.000Z","open":"7612.1","close":"7610","min":"7610","max":"7612.1"},{"timestamp":"2018-06-04T07:54:00.000Z","open":"7612.1","close":"7613.8","min":"7611.9","max":"7613.8"},{"timestamp":"2018-06-04T07:55:00.000Z","open":"7612.1","close":"7609","min":"7608","max":"7613.8"},{"timestamp":"2018-06-04T07:56:00.000Z","open":"7609","close":"7607.3","min":"7607.3","max":"7609.1"},{"timestamp":"2018-06-04T07:57:00.000Z","open":"7608","close":"7608","min":"7606.1","max":"7608.6"},{"timestamp":"2018-06-04T07:58:00.000Z","open":"7608.6","close":"7606.4","min":"7605.4","max":"7610.5"},{"timestamp":"2018-06-04T07:59:00.000Z","open":"7608","close":"7608","min":"7606.5","max":"7610.4"},{"timestamp":"2018-06-04T08:00:00.000Z","open":"7607.9","close":"7607.9","min":"7603.1","max":"7608"},{"timestamp":"2018-06-04T08:01:00.000Z","open":"7603.1","close":"7609.1","min":"7598.9","max":"7609.1"},{"timestamp":"2018-06-04T08:02:00.000Z","open":"7601","close":"7608.5","min":"7601","max":"7609.1"},{"timestamp":"2018-06-04T08:03:00.000Z","open":"7607.9","close":"7607.8","min":"7601.5","max":"7608.5"},{"timestamp":"2018-06-04T08:04:00.000Z","open":"7607.1","close":"7610.1","min":"7601.5","max":"7611.5"},{"timestamp":"2018-06-04T08:05:00.000Z","open":"7611.1","close":"7602.8","min":"7602.8","max":"7612.8"},{"timestamp":"2018-06-04T08:06:00.000Z","open":"7610.6","close":"7609.5","min":"7605.2","max":"7610.6"},{"timestamp":"2018-06-04T08:07:00.000Z","open":"7609.6","close":"7608.5","min":"7600","max":"7609.6"},{"timestamp":"2018-06-04T08:08:00.000Z","open":"7608.5","close":"7602.7","min":"7600.9","max":"7608.5"},{"timestamp":"2018-06-04T08:09:00.000Z","open":"7601.7","close":"7602.3363738","min":"7599.8","max":"7602.4"},{"timestamp":"2018-06-04T08:10:00.000Z","open":"7602.3","close":"7600.41221147","min":"7595","max":"7602.3"},{"timestamp":"2018-06-04T08:11:00.000Z","open":"7600.41221147","close":"7596.4","min":"7595","max":"7600.5"},{"timestamp":"2018-06-04T08:12:00.000Z","open":"7596.4","close":"7590","min":"7586.7","max":"7596.6"},{"timestamp":"2018-06-04T08:13:00.000Z","open":"7585.3","close":"7579.8","min":"7579.2","max":"7592.8"},{"timestamp":"2018-06-04T08:14:00.000Z","open":"7586.1","close":"7586.2","min":"7576.6","max":"7586.2"},{"timestamp":"2018-06-04T08:15:00.000Z","open":"7586.1","close":"7580.9","min":"7575.8","max":"7586.1"},{"timestamp":"2018-06-04T08:16:00.000Z","open":"7581","close":"7590.3","min":"7575.9","max":"7594.3"},{"timestamp":"2018-06-04T08:17:00.000Z","open":"7593.28170572","close":"7592.7145236","min":"7585.4","max":"7593.8"},{"timestamp":"2018-06-04T08:18:00.000Z","open":"7592.9","close":"7588.87806622","min":"7583","max":"7592.9"},{"timestamp":"2018-06-04T08:19:00.000Z","open":"7588.87806622","close":"7582.2","min":"7580","max":"7588.9"},{"timestamp":"2018-06-04T08:20:00.000Z","open":"7582.4","close":"7586.8","min":"7582.4","max":"7589.5"},{"timestamp":"2018-06-04T08:21:00.000Z","open":"7586.6","close":"7592.11224912","min":"7578.4","max":"7597.7256408"},{"timestamp":"2018-06-04T08:22:00.000Z","open":"7592","close":"7583","min":"7575","max":"7592.5"},{"timestamp":"2018-06-04T08:23:00.000Z","open":"7588.3","close":"7589.1","min":"7583","max":"7589.5"},{"timestamp":"2018-06-04T08:24:00.000Z","open":"7590.7","close":"7585","min":"7583","max":"7591"},{"timestamp":"2018-06-04T08:25:00.000Z","open":"7591","close":"7592.7","min":"7583","max":"7596.4"},{"timestamp":"2018-06-04T08:26:00.000Z","open":"7594.3","close":"7585","min":"7582","max":"7598"},{"timestamp":"2018-06-04T08:27:00.000Z","open":"7591.5","close":"7594.5","min":"7582.9","max":"7596.3"},{"timestamp":"2018-06-04T08:28:00.000Z","open":"7594.2","close":"7585","min":"7583.2","max":"7596.20534722"},{"timestamp":"2018-06-04T08:29:00.000Z","open":"7598.7","close":"7588.4","min":"7588.4","max":"7600"},{"timestamp":"2018-06-04T08:30:00.000Z","open":"7597.8","close":"7597.1409125","min":"7588","max":"7599"},{"timestamp":"2018-06-04T08:31:00.000Z","open":"7597.4","close":"7598.7","min":"7597.1","max":"7599"},{"timestamp":"2018-06-04T08:32:00.000Z","open":"7598.8","close":"7599.9251897","min":"7593","max":"7600"},{"timestamp":"2018-06-04T08:33:00.000Z","open":"7600","close":"7601.9","min":"7599.9","max":"7601.9"},{"timestamp":"2018-06-04T08:34:00.000Z","open":"7599.8","close":"7603.7","min":"7599.8","max":"7605"},{"timestamp":"2018-06-04T08:35:00.000Z","open":"7604.9","close":"7601.08277466","min":"7601.08277466","max":"7605"},{"timestamp":"2018-06-04T08:36:00.000Z","open":"7601.7","close":"7602.7","min":"7599.1","max":"7607.1"},{"timestamp":"2018-06-04T08:37:00.000Z","open":"7605","close":"7605","min":"7604","max":"7606.6"},{"timestamp":"2018-06-04T08:38:00.000Z","open":"7605","close":"7603","min":"7603","max":"7605.1"},{"timestamp":"2018-06-04T08:39:00.000Z","open":"7605.1","close":"7605","min":"7598.4","max":"7605.1"},{"timestamp":"2018-06-04T08:40:00.000Z","open":"7605","close":"7596.5","min":"7596.4","max":"7605.1"},{"timestamp":"2018-06-04T08:41:00.000Z","open":"7605","close":"7605","min":"7596.8","max":"7605.6"},{"timestamp":"2018-06-04T08:42:00.000Z","open":"7605","close":"7605","min":"7600.8","max":"7605.1"},{"timestamp":"2018-06-04T08:43:00.000Z","open":"7605","close":"7605","min":"7604.1","max":"7605.1"},{"timestamp":"2018-06-04T08:44:00.000Z","open":"7605.1","close":"7605.18064587","min":"7605","max":"7607.52228657"},{"timestamp":"2018-06-04T08:45:00.000Z","open":"7605.3","close":"7605.2","min":"7599.9","max":"7605.5"},{"timestamp":"2018-06-04T08:46:00.000Z","open":"7605","close":"7606.9","min":"7596.9","max":"7607.2"},{"timestamp":"2018-06-04T08:47:00.000Z","open":"7607.36210697","close":"7600.7","min":"7597.7","max":"7607.36210697"},{"timestamp":"2018-06-04T08:48:00.000Z","open":"7600.8","close":"7596.4","min":"7596.4","max":"7601.1"},{"timestamp":"2018-06-04T08:49:00.000Z","open":"7601.1","close":"7601","min":"7601","max":"7601.1"},{"timestamp":"2018-06-04T08:50:00.000Z","open":"7601.1","close":"7601.1","min":"7600.9","max":"7601.1"},{"timestamp":"2018-06-04T08:51:00.000Z","open":"7601.1","close":"7603","min":"7599.7","max":"7603"},{"timestamp":"2018-06-04T08:52:00.000Z","open":"7602.7","close":"7602.7","min":"7602.7","max":"7602.8"},{"timestamp":"2018-06-04T08:53:00.000Z","open":"7596.5","close":"7601.1","min":"7596","max":"7602.7"},{"timestamp":"2018-06-04T08:54:00.000Z","open":"7601","close":"7601.1","min":"7595.8","max":"7601.1"},{"timestamp":"2018-06-04T08:55:00.000Z","open":"7601.1","close":"7598","min":"7598","max":"7601.1"},{"timestamp":"2018-06-04T08:56:00.000Z","open":"7601.03445407","close":"7601.26881158","min":"7601","max":"7601.3"},{"timestamp":"2018-06-04T08:57:00.000Z","open":"7601.2","close":"7602.1","min":"7596.3","max":"7602.1"},{"timestamp":"2018-06-04T08:58:00.000Z","open":"7602.1","close":"7602.1","min":"7602.04946241","max":"7602.1"}];

        //Configuration for drawing of the graph
        var accessor = candlestick.accessor();
        var indicatorPreRoll = 40;
        
        // Map function to iterate through the data colllected
        data = tickHistory.map(function(d) {
        return {
            date: new Date(d.timestamp),
            open: +d.open,
            high: +d.max,
            low: +d.min,
            close: +d.close,
            
            };
        }).sort(function (a, b) { return d3.ascending(accessor.d(a), accessor.d(b)); }); 
          
        //Set the scale range for X and Y domain
        x.domain(techan.scale.plot.time(data).domain());
        y.domain(techan.scale.plot.ohlc(data.slice(indicatorPreRoll)).domain());
        yPercent.domain(techan.scale.plot.percent(y, accessor(data[indicatorPreRoll])).domain());

        //
      /*   var trendlineData = [
        { start: { date: new Date(2018, 6, 04), value: 7201.50 }, end: { date: new Date(2018, 6, 04), value: 7100.34 } },
        { start: { date: new Date(2018, 6, 04), value: 7000 }, end: { date: new Date(2018, 6, 04), value: 7000.50 } }
    ];

    var supstanceData = [
        { start: new Date(2014, 2, 11), end: new Date(2014, 5, 9), value: 63.64 },
        { start: new Date(2013, 10, 21), end: new Date(2014, 2, 17), value: 55.50 }
    ]; */

    // Create a button to automatically add these data to the trade variable
    //so as to display the trade arrow 
    var trades = [
        { date: data[67].date, type: "buy", price: data[67].low, low: data[67].low, high: data[67].high },
        { date: data[100].date, type: "sell", price: data[100].high, low: data[100].low, high: data[100].high },
        { date: data[130].date, type: "buy", price: data[130].low, low: data[130].low, high: data[130].high },
        { date: data[170].date, type: "sell", price: data[170].low, low: data[170].low, high: data[170].high }
    ];

    var macdData = techan.indicator.macd()(data);
    macdScale.domain(techan.scale.plot.macd(macdData).domain());
    var rsiData = techan.indicator.rsi()(data);
    rsiScale.domain(techan.scale.plot.rsi(rsiData).domain());


    svg.select("g.candlestick").datum(data).call(candlestick);
    svg.select("g.close.annotation").datum([data[data.length-1]]).call(closeAnnotation);
    svg.select("g.volume").datum(data).call(volume);
    svg.select("g.sma.ma-0").datum(techan.indicator.sma().period(10)(data)).call(sma0);
    svg.select("g.sma.ma-1").datum(techan.indicator.sma().period(20)(data)).call(sma1);
    svg.select("g.ema.ma-2").datum(techan.indicator.ema().period(50)(data)).call(ema2);
    svg.select("g.macd .indicator-plot").datum(macdData).call(macd);
    svg.select("g.rsi .indicator-plot").datum(rsiData).call(rsi);

    svg.select("g.crosshair.ohlc").call(ohlcCrosshair).call(zoom);
    svg.select("g.crosshair.macd").call(macdCrosshair).call(zoom);
    svg.select("g.crosshair.rsi").call(rsiCrosshair).call(zoom);
    // svg.select("g.trendlines").datum(trendlineData).call(trendline).call(trendline.drag);
    // svg.select("g.supstances").datum(supstanceData).call(supstance).call(supstance.drag);

    svg.select("g.tradearrow").datum(trades).call(tradearrow);

    // Stash for zooming
    zoomableInit = x.zoomable().domain([indicatorPreRoll, data.length]).copy(); // Zoom in a little to hide indicator preroll
    yInit = y.copy();
    yPercentInit = yPercent.copy();

    //function call to display the data on a graph
    draw();

    // Data to display initially
    zoomableInit = x.zoomable().domain([indicatorPreRoll, data.length]).copy(); // Zoom in a little to hide indicator preroll
    yInit = y.copy();
    yPercentInit = yPercent.copy();

    //Function to zoom in or out
    function zoomed() {
    x.zoomable().domain(d3.event.transform.rescaleX(zoomableInit).domain());
    y.domain(d3.event.transform.rescaleY(yInit).domain());
    yPercent.domain(d3.event.transform.rescaleY(yPercentInit).domain());

    //After zooming redraw the graph    
    draw();
}

//Drawing or displaying the data function
function draw() {
    svg.select("g.x.axis").call(xAxis);
    svg.select("g.ohlc .axis").call(yAxis);
    //svg.select("g.volume.axis").call(volumeAxis);
    svg.select("g.percent.axis").call(percentAxis);
    svg.select("g.macd .axis.right").call(macdAxis);
    svg.select("g.rsi .axis.right").call(rsiAxis);
    svg.select("g.macd .axis.left").call(macdAxisLeft);
    svg.select("g.rsi .axis.left").call(rsiAxisLeft);

    // We know the data does not change, a simple refresh that does not perform data joins will suffice.
    svg.select("g.candlestick").call(candlestick.refresh);
    svg.select("g.close.annotation").call(closeAnnotation.refresh);
    //svg.select("g.volume").call(volume.refresh);
    svg.select("g .sma.ma-0").call(sma0.refresh);
    svg.select("g .sma.ma-1").call(sma1.refresh);
    svg.select("g .ema.ma-2").call(ema2.refresh);
    svg.select("g.macd .indicator-plot").call(macd.refresh);
    svg.select("g.rsi .indicator-plot").call(rsi.refresh);
    svg.select("g.crosshair.ohlc").call(ohlcCrosshair.refresh);
    svg.select("g.crosshair.macd").call(macdCrosshair.refresh);
    svg.select("g.crosshair.rsi").call(rsiCrosshair.refresh);
    // svg.select("g.trendlines").call(trendline.refresh);
    // svg.select("g.supstances").call(supstance.refresh);
    svg.select("g.tradearrow").call(tradearrow.refresh);
}


    