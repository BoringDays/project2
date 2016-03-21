var React = require('react');
var Main = require('main');
var IndexModal = require('index-modal');

var Index = React.createClass({
    render: function () {
        return (
            <main class="container-fluid">
                <header class="row">
                    <span class="title-icon"></span>

                    <h1>帝隆P2P</h1>
                </header>
                <Main />
                <div class="row">
                    <nav id="nav-bottom" data-spy="affix">
                        <ul class="nav nav-pills">
                            <li class="active">
                                <a href="#">
                                    <span class="icon icon-bottom-home"></span>
                                    <span class="nav-tab-label">首页</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon icon-bottom-money"></span>
                                    <span class="nav-tab-label">理财</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon icon-bottom-borrow"></span>
                                    <span class="nav-tab-label">借款</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon icon-bottom-transfer"></span>
                                    <span class="nav-tab-label">转让</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="icon icon-bottom-user"></span>
                                    <span class="nav-tab-label">我</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <IndexModal />
            </main>
        );
    }
});

module.exports = Index;