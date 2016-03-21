var React = require('react');

var Main = React.createClass({
    render: function () {
        return (
            <section id="scroll-wrapper">
                <div class="row">
                    <div id="index-carousel" class="carousel slide" data-ride="carousel" data-interval="3000">
                        <ol class="carousel-indicators">
                            <li data-slide-to="0" class="active"></li>
                            <li data-slide-to="1"></li>
                        </ol>

                        <div class="carousel-inner" role="listbox">
                            <div class="item active">
                                <img src="../images/slide1.jpg" alt="" width="100%"/>

                                <div class="carousel-caption"></div>
                            </div>
                            <div class="item">
                                <img src="../images/slide2.jpg" alt="" width="100%"/>

                                <div class="carousel-caption"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row grid">
                    <div class="col-xs-6 grid-cell">
                        <div class="grid-icon icon-1"></div>
                        <span class="cell-title">累计投资(元)</span>

                        <div id="number1" class="odometer grid-num-odometer"></div>
                    </div>
                    <div class="col-xs-6 grid-cell">
                        <div class="grid-icon icon-2"></div>
                        <span class="cell-title">累计赚取(元)</span>

                        <div id="number2" class="odometer grid-num-odometer"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 index-bottom-container">
                        <ul class="index-list">
                            <li>
                                <span class="new-label">新标</span>

                                <div class="list-cell-top">
                                    <h4 class="clearfix">
                                        <span class="list-cell-title">新疆葡萄庄园项目新疆葡萄庄园项目新疆葡萄庄园项目</span>
                                        <ul class="icon-group">
                                            <li>实</li>
                                            <li>HR</li>
                                        </ul>
                                    </h4>
                                    <span class="label-tag tag-date">1个月</span>
                                    <span class="label-tag tag-money">10,000元借款</span>
                                </div>
                                <div class="list-cell-bottom">
                                    <div class="circle-wrap">
                                        <div class="circle-inner">
                                            <p>预期年化最高</p>

                                            <div class="highest-percent"><b>12</b>%</div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="42"
                                                     aria-valuemin="0" aria-valuemax="100" style="width: 42%;"></div>
                                            </div>
                                            <span>42%</span>
                                        </div>
                                    </div>
                                    <button class="btn btn-primary">马上投资</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
});

module.exports = Main;