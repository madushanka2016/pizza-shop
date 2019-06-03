function createOrder(){
    details.innerHTML = `
    <div class="container">
    <div class="row" style="border: solid">
        <div class="col-4" >
            <img src="image/p0.jpg" alt="" height="300px" width="80%" style="margin:10% ">
        </div>
        <div class="col-8">
            <h1 class="text-center" style="margin-top: 80px;">Neapolitan Pizza</h1>
            <hr>
            <div class="row text-center">
                <div class="col">
                    <h3 style="margin:20px 0px 30px 0px;">RS. 500.00</h3>
                    <div class="row">
                        <div class="col-4">
                            <label for="">Quantity</label>
                        </div>
                        <div class="col-7">
                            <input class="form-control form-control-sm" type="number">
                        </div>
                    </div>
                    <br>
                    <button class="btn btn-outline-primary" onclick="createDelivery()">Self Collect</button>
                    <button class="btn btn-outline-primary" onclick="createDelivery()">Delivery</button>
                </div>
                <div class="col">
                    <img src="image/po1.jpg" alt="" style="margin-bottom: 20px">
                </div>
            </div>
        </div>
    </div>
    <div class="row" style="margin-top: 20px;margin-bottom: 20px">
        <div class="col-2">
            <a href="">
                <img src="image/p1.jpg" width="80%" height="150px;" alt="" style="margin-left:10%;margin-top:20px;">
            </a>
            <p class="text-center">Rs. 500.00</p>
        </div>
        <div class="col-2">
            <a href="">
                <img src="image/p2.jpg" width="80%" height="150px;" alt="" style="margin-left:10%;margin-top:20px;">
            </a>
            <p class="text-center">Rs. 550.00</p>
        </div>
        <div class="col-2">
            <a href="">
                <img src="image/p3.jpg" width="80%" height="150px;" alt="" style="margin-left:10%;margin-top:20px;">
            </a>
            <p class="text-center">Rs. 1050.00</p>
        </div>
        <div class="col-2">
            <a href="">
                <img src="image/p4.jpg" width="80%" height="150px;" alt="" style="margin-left:10%;margin-top:20px;">
            </a>
            <p class="text-center">Rs. 700.00</p>
        </div>
        <div class="col-2">
            <a href="">
                <img src="image/p7.jpg" width="80%" height="150px;" alt="" style="margin-left:10%;margin-top:20px;">
            </a>
            <p class="text-center">Rs. 650.00</p>
        </div>
        <div class="col-2">
            <a href="">
                <img src="image/p6.jpg" width="80%" height="150px;" alt="" style="margin-left:10%;margin-top:20px;">
            </a>
            <p class="text-center">Rs. 650.00</p>
        </div>
    </div>
</div>
    `
}