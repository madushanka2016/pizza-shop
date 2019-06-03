function createDelivery(){
    details.innerHTML = `
    <div class="container">
        <div class="row">
            <div class="col-1"></div>
            <div class="col-6">
                <h3 class="text-center" style="margin-top: 80px;margin-bottom: 30px;">Total : Rs.1000.00</h3>
                <form action="">
                    <div class="row">
                        <div class="col-4">
                            <label for="">Name on card:</label>
                        </div>
                        <div class="col-8">
                            <input class="form-control" type="text">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-4">
                            <label for="">Card number:</label>
                        </div>
                        <div class="col-8">
                            <input class="form-control" type="text">
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-6">
                            <div class="row">
                                <div class="col-4">
                                    <label for="">CCV</label>
                                </div>
                                <div class="col-8">
                                    <input class="form-control" type="text" placeholder="Ex:456">
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="row">
                                <div class="col-4">
                                    <label for="">Expiration</label>
                                </div>
                                <div class="col-8">
                                    <input class="form-control" type="text" placeholder="MM/YY">
                                </div>
                            </div>
                        </div>
                    </div>
                    <br>
                    <div class="row">
                        <div class="col-4">
                            <label for="">Delivery Address:</label>
                        </div>
                        <div class="col-8">
                            <textarea class="form-control" rows="5" id="comment"></textarea>
                        </div>
                    </div>
                    <br>
                    <button type="button" class="btn btn-success" style="width: 100%; margin-bottom: 50px">Pay Now</button>
                    <!-- <input type="radio"><label for="">
                    <i class="fa fa-cc-visa" style="font-size:48px;color:white;background-color: blue"></i></label>
                    <input type="radio"><label for="">
                            <i class="fa fa-cc-paypal" style="font-size:48px;color:red"></i></label> -->
                    
                </form>
            </div>
            <div class="col-5">
                <img src="image/pa1.jpg" alt="" style="margin-top: 80px;margin-left: 0%; width: 100%;height: 80%">
            </div>
        </div>
    </div>`
}