// var details = document.getElementById("details");
function createDetails(){
    details.innerHTML = `<div class="container">
        
    <!--  -->
    <!--  -->
    <!--  -->
        <div class="list">
            <div class="row">
                <div class="col-2">
                    <h4>Type</h4>
                    <div class="row" style="margin-top: 20px">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">Neapolitan Pizza</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">Chicago Pizza</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">New York-Style Pizza</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">Sicilian Pizza</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">Greek Pizza</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">California Pizza</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">Detroit Pizza</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">St. Louis Pizza</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">Chichago Pizza</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col" style="margin-top: 10px">
                            <input type="checkbox" class="form-check-input" id="exampleCheck2">
                            <label class="form-check-label" for="exampleCheck1">Sushi Pizza</label>
                        </div>
                    </div>
                    <div class="row justify-content-center" style="margin-top: 30px">
                        <button type="button" class="btn btn-outline-dark">More...</button>  
                    </div>
                    <div class="row" style="margin-top: 40px">
                        <div class="col">
                            <h4>Price</h4>
                            <div class="row">
                                <div class="col-4">
                                    <label for="">From</label>
                                </div>
                                <div class="col-7">
                                    <input class="form-control form-control-sm" type="number">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <label for="">To</label>
                                </div>
                                <div class="col-7">
                                    <input class="form-control form-control-sm" type="number">
                                </div>
                            </div>
                            <div class="row justify-content-center" style="margin-top: 30px">
                                <button type="button" class="btn btn-outline-dark" style="">Find</button>  
                            </div>
                        </div> 
                    </div>
                        
                </div>



                <div class="col-10" style="border-left: solid">
                    <div class="row">
                        <div class="col-4" >
                            <h5 class="text-center" style="margin-bottom: 0px;margin-top: 20px;">Neapolitan Pizza</h5>
                            <img src="image/p1.jpg" width="80%" height="200px;" alt="" style="margin-left:10%;margin-top:20px ">
                            <p class="text-center">Rs. 500.00</p>
                            <button style="margin-left: 35%; width: 30%;" class="btn btn-primary" onclick="createOrder()">Order</button>
                            <!-- <button style="margin-left: 20%; width: 30%;" class="btn btn-primary">Order</button>
                            <button style="width: 30%;" class="btn btn-primary" >View</button> -->
                        </div>
                        <div class="col-4" >
                            <h5 class="text-center" style="margin-bottom: 0px;margin-top: 20px;">Sicilian Pizza</h5>
                            <img src="image/p2.jpg" width="80%" height="200px;" alt="" style="margin-left:10%;margin-top:20px ">
                            <p class="text-center">Rs. 650.00</p>
                            <button style="margin-left: 35%; width: 30%;" class="btn btn-primary" onclick="createOrder()">Order</button>
                            <!-- <button style="margin-left: 20%; width: 30%;" class="btn btn-primary">Order</button>
                            <button style="width: 30%;" class="btn btn-primary" >View</button> -->
                        </div>
                        <div class="col-4" >
                            <h5 class="text-center" style="margin-bottom: 0px;margin-top: 20px;">California Pizza</h5>
                            <img src="image/p3.jpg" width="80%" height="200px;" alt="" style="margin-left:10%;margin-top:20px ">
                            <p class="text-center">Rs. 800.00</p>
                            <button style="margin-left: 35%; width: 30%;" class="btn btn-primary" onclick="createOrder()">Order</button>
                            <!-- <button style="margin-left: 20%; width: 30%;" class="btn btn-primary">Order</button>
                            <button style="width: 30%;" class="btn btn-primary" >View</button> -->
                        </div>
                    </div>
                    <div class="row" style="height: 30px">

                    </div>
                    <div class="row">
                        <div class="col-4" >
                            <h5 class="text-center" style="margin-bottom: 0px;margin-top: 20px;">Detroit Pizza</h5>
                            <img src="image/p1.jpg" width="80%" height="200px;" alt="" style="margin-left:10%;margin-top:20px ">
                            <p class="text-center">Rs. 450.00</p>
                            <button style="margin-left: 35%; width: 30%;" class="btn btn-primary" onclick="createOrder()">Order</button>
                            <!-- <button style="margin-left: 20%; width: 30%;" class="btn btn-primary">Order</button>
                            <button style="width: 30%;" class="btn btn-primary" >View</button> -->
                        </div>
                        <div class="col-4" >
                            <h5 class="text-center" style="margin-bottom: 0px;margin-top: 20px;">Greek Pizza</h5>
                            <img src="image/p2.jpg" width="80%" height="200px;" alt="" style="margin-left:10%;margin-top:20px ">
                            <p class="text-center">Rs. 550.00</p>
                            <button style="margin-left: 35%; width: 30%;" class="btn btn-primary" onclick="createOrder()">Order</button>
                            <!-- <button style="margin-left: 20%; width: 30%;" class="btn btn-primary">Order</button>
                            <button style="width: 30%;" class="btn btn-primary" >View</button> -->
                        </div>
                        <div class="col-4" >
                            <h5 class="text-center" style="margin-bottom: 0px;margin-top: 20px;">Sushi Pizza</h5>
                            <img src="image/p3.jpg" width="80%" height="200px;" alt="" style="margin-left:10%;margin-top:20px ">
                            <p class="text-center">Rs. 1050.00</p>
                            <button style="margin-left: 35%; width: 30%;" class="btn btn-primary" onclick="createOrder()">Order</button>
                            <!-- <button style="margin-left: 20%; width: 30%;" class="btn btn-primary">Order</button>
                            <button style="width: 30%;" class="btn btn-primary" >View</button> -->
                        </div>
                    </div>
                    <div class="row" style="margin-top: 20px">
                        <button class="btn btn-outline-primary" style="margin-left: 45%">Next Page</button>
                    </div>
                </div>

            </div>
        </div>
    </div>`
}