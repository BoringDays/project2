var React = require('react');

var IndexModal = React.createClass({
    render: function () {
        return (
            <div class="modal" id="modal_1" tabindex="-1" role="dialog">
                <div class="modal-dialog">
                    <!--<div class="modal-content">-->
                    <button type="button" class="close-modal" data-dismiss="modal"><span aria-hidden="true">&times;</span></button>
                    <div>
                        <img src="../images/pop.png" width="100%" />
                        <span id="money-total">￥
                            <span class="odometer"></span>
                        </span>
                    </div>
                    <!--</div>-->
                </div>
            </div>
        );
    }
});

module.exports = IndexModal;