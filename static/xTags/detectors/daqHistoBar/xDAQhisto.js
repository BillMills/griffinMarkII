(function(){  

    xtag.register('widget-DAQhisto', {
        extends: 'div',
        lifecycle: {
            created: function() {
                var histos = ['spectrum', 'time', 'pulse', 'waveform'],
                    i;

                    for(i=0; i<histos.length; i++){
                        this[histos[i]] = document.createElement('div')
                        this[histos[i]].setAttribute('id', histos[i])
                        this[histos[i]].setAttribute('class', 'DAQhisto')
                        this.appendChild(this[histos[i]]);
                    }


                    //draw dygraphs
                    this.spectrumPlot = new Dygraph(document.getElementById('spectrum'), [[1,2,3]], {
                        title: 'test',
                        xlabel: 'ns',
                        ylabel: 'mV',
                        
                        width: this.offsetWidth*0.4,
                        height: this.offsetWidth*0.2,
                        sigFigs: 2,
                        strokeWidth: 4,
                        yAxisLabelWidth: 75,
                        xAxisHeight: 30,
                        highlightCircleSize: 6,
                        showLabelsOnHighlight: false,
                        stepPlot: true,
                        includeZero: true,
                        colors: ['#F1C40F', '#2ECC71', '#E74C3C', '#ECF0F1', '#1ABC9C', '#E67E22', '#9B59B6']
                    });

                    this.timePlot = new Dygraph(document.getElementById('time'), 'ns,mV,\n', {
                        title: 'test',
                        xlabel: 'ns',
                        ylabel: 'mV',
                        width: this.offsetWidth*0.4,
                        height: this.offsetWidth*0.2,
                        sigFigs: 2,
                        strokeWidth: 4,
                        yAxisLabelWidth: 75,
                        xAxisHeight: 30,
                        highlightCircleSize: 6,
                        showLabelsOnHighlight: false,
                        stepPlot: true,
                        includeZero: true,
                        colors: ['#F1C40F', '#2ECC71', '#E74C3C', '#ECF0F1', '#1ABC9C', '#E67E22', '#9B59B6']
                    });

                    this.pulsePlot = new Dygraph(document.getElementById('pulse'), 'ns,mV,\n', {
                        title: 'test',
                        xlabel: 'ns',
                        ylabel: 'mV',
                        width: this.offsetWidth*0.4,
                        height: this.offsetWidth*0.2,
                        sigFigs: 2,
                        strokeWidth: 4,
                        yAxisLabelWidth: 75,
                        xAxisHeight: 30,
                        highlightCircleSize: 6,
                        showLabelsOnHighlight: false,
                        stepPlot: true,
                        includeZero: true,
                        colors: ['#F1C40F', '#2ECC71', '#E74C3C', '#ECF0F1', '#1ABC9C', '#E67E22', '#9B59B6']
                    });

                    this.wavefromPlot = new Dygraph(document.getElementById('waveform'), 'ns,mV,\n', {
                        title: 'test',
                        xlabel: 'ns',
                        ylabel: 'mV',
                        width: this.offsetWidth*0.4,
                        height: this.offsetWidth*0.2,
                        sigFigs: 2,
                        strokeWidth: 4,
                        yAxisLabelWidth: 75,
                        xAxisHeight: 30,
                        highlightCircleSize: 6,
                        showLabelsOnHighlight: false,
                        stepPlot: true,
                        includeZero: true,
                        colors: ['#F1C40F', '#2ECC71', '#E74C3C', '#ECF0F1', '#1ABC9C', '#E67E22', '#9B59B6']
                    });


            },
            inserted: function() {},
            removed: function() {},
            attributeChanged: function() {}
        }, 
        events: { 

        },
        accessors: {


        }, 
        methods: {

            'update': function(){
                var i,
                    x = [], y = []

                for(i=0; i<4096; i++){
                    x.push(i)
                    dummy.push(Math.random());
                }


            }

        }
    });

})();