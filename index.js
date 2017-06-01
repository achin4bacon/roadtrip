

///
Vue.component('available-items', {
    template: `
        <span class="available-items">
            <button v-on:click='additem'><img v-bind:src="pic"  class='itemimage'>
        </button></span>
    `,
    props: ['name', 'count', 'pic', 'currentItems', 'items'],
    data: function () {
        return {

        };
    },
    computed: {},
    methods: {
        additem: function () {
            this.$emit('added');
        },


    }
});
// /////

Vue.component('current-items', {
    template: `
        <div class="current-items">
            <div>{{name}} - {{count}}
            <button v-on:click="getrid">delete</button></div>
        </div>
    `,
    props: ['name', 'count'],
    data: function () {
        return {

        };
    },
    computed: {},
    methods: {
        getrid: function () {
            this.$emit('deleted');
        }
    }
});

//view model 
var vm = new Vue({
    el: '#app',
    data: {
        maxWeight: 500,
        budget: 100,
        items: [
            {
                itemName: 'poop raft',
                itemCost: 20,
                itemWeight: 5,
                itemCount: 0,
                pic: './roadtrip/poopraft.jpg',
                deleted: false,
                added: false
            },
            {
                itemName: 'cat',
                itemCost: 0,
                itemWeight: 15,
                itemCount: 0,
                pic: './roadtrip/cat.jpg',
                deleted: false,
                added: false
            },
            {
                itemName: 'broken guitar',
                itemCost: 13,
                itemWeight: 12,
                itemCount: 0,
                pic: './roadtrip/brokenguitar.jpg',
                deleted: false,
                added: false
            },
            {
                itemName: 'one left snowshoe',
                itemCost: 10,
                itemWeight: 3,
                itemCount: 0,
                pic: './roadtrip/snowshoe.jpg',
                deleted: false,
                added: false
            },
            {
                itemName: 'bindle and stick of shame',
                itemCost: 0,
                itemWeight: 5,
                itemCount: 0,
                pic: './roadtrip/bindlestick.jpg',
                deleted: false,
                added: false
            },
            {
                itemName: 'cooler of beer',
                itemCost: 40,
                itemWeight: 30,
                itemCount: 0,
                pic: './roadtrip/coolerofbeer.jpg',
                deleted: false,
                added: false
            },
            {
                itemName: 'eighth of weed',
                itemCost: 25,
                itemWeight: 0.01,
                itemCount: 0,
                pic: './roadtrip/weed.jpeg',
                deleted: false,
                added: false
            },
            {
                itemName: 'a sandwich',
                itemCost: 7,
                itemWeight: 0.5,
                itemCount: 0,
                pic: './roadtrip/sandwich.jpeg',
                deleted: false,
                added: false
            }
        ],
        currentItems: []
    },
    computed: {

    },
    methods: {
        // This is the same for all try to get them in one
        // Replace alerts, with style changes
        // Add delete buttons and their handling to output list
        addRaft: function () {
            console.log('added raft');
            if (this.budget < this.items[0].itemCost) {
                alert("You have insufficient funds!");
                //change the style one way
            } else if (this.maxWeight < this.items[0].itemWeight) {
                alert("Your car can't hold that much weight!");
                //change the style another way
            } else {
                console.log('clicked');
                this.currentItems.push(this.items[0]);
                this.items[0].itemCount += 1;
                this.budget = this.budget - this.items[0].itemCost;
                this.maxWeight = this.maxWeight - this.items[0].itemWeight;
                this.items[0].addWeedadded = true;
            }
            return this.currentTimes;
        },
        addCat: function () {
            if (this.budget < this.items[1].itemCost) {
                alert("You have insufficient funds!");
            } else if (this.maxWeight < this.items[1].itemWeight) {
                alert("Your car can't hold that much weight!");
            } else {
                this.currentItems.push(this.items[1]);
                this.items[1].itemCount += 1;
                this.maxWeight = this.maxWeight - this.items[1].itemWeight;
                this.budget = this.budget - this.items[1].itemCost;
            }
            return this.currentTimes;
        },
        addGuitar: function () {
            if (this.budget < this.items[2].itemCost) {
                alert("You have insufficient funds!");
            } else if (this.maxWeight < this.items[2].itemWeight) {
                alert("Your car can't hold that much weight!");
            } else {
                this.currentItems.push(this.items[2]);
                this.items[2].itemCount += 1;
                this.maxWeight = this.maxWeight - this.items[2].itemWeight;
                this.budget = this.budget - this.items[2].itemCost;
            }
            return this.currentTimes;
        },
        addShoe: function () {
            if (this.budget < this.items[3].itemCost) {
                alert("You have insufficient funds!");
            } else if (this.maxWeight < this.items[3].itemWeight) {
                alert("Your car can't hold that much weight!");
            } else {
                this.currentItems.push(this.items[3]);
                this.items[3].itemCount += 1;
                this.maxWeight = this.maxWeight - this.items[3].itemWeight;
                this.budget = this.budget - this.items[3].itemCost;
            }
            return this.currentTimes;
        },
        addBindle: function () {
            if (this.budget < this.items[4].itemCost) {
                alert("You have insufficient funds!");
            } else if (this.maxWeight < this.items[4].itemWeight) {
                alert("Your car can't hold that much weight!");
            } else {
                this.currentItems.push(this.items[4]);
                this.items[4].itemCount += 1;
                this.maxWeight = this.maxWeight - this.items[4].itemWeight;
                this.budget = this.budget - this.items[4].itemCost;
            }
            return this.currentTimes;
        },
        addCooler: function () {
            if (this.budget < this.items[5].itemCost) {
                alert("You have insufficient funds!");
            } else if (this.maxWeight < this.items[5].itemWeight) {
                alert("Your car can't hold that much weight!");
            } else {
                this.currentItems.push(this.items[5]);
                this.items[5].itemCount += 1;
                this.maxWeight = this.maxWeight - this.items[5].itemWeight;
                this.budget = this.budget - this.items[5].itemCost;
            }
            return this.currentTimes;
        },
        addWeed: function () {
            if (this.budget < this.items[6].itemCost) {
                alert("You have insufficient funds!");
            } else if (this.maxWeight < this.items[6].itemWeight) {
                alert("Your car can't hold that much weight!");
            } else {
                this.currentItems.push(this.items[6]);
                this.items[6].itemCount += 1;
                this.maxWeight = this.maxWeight - this.items[6].itemWeight;
                this.budget = this.budget - this.items[6].itemCost;
            }
            return this.currentTimes;
        },
        addSandwich: function () {
            console.log(this.items)
            if (this.budget < this.items[7].itemCost) {
                alert("You have insufficient funds!");
            } else if (this.maxWeight < this.items[7].itemWeight) {
                alert("Your car can't hold that much weight!");
            } else {
                this.currentItems.push(this.items[7]);
                this.items[7].itemCount += 1;
                this.maxWeight = this.maxWeight - this.items[7].itemWeight;
                this.budget = this.budget - this.items[7].itemCost;
            }
            return this.currentTimes;
        },

        ridder: function () {
            console.log('clicked delete, running ridder');

            // for (var i in this.items) {
            //     console.log(i);
            //     if (this.items.itemCount < 1) {
            //         console.log(this.items[i].deleted);
            //         this.items[i].deleted = true;
            //     } else {
            //         this.items[i].itemCount -= 1;
            //         this.maxWeight = this.maxWeight + this.items[i].itemWeight;
            //         this.budget = this.budget + this.items[i].itemCost;
            //     }
            // }
        },

        adder: function (item) {
            console.log('maybe?');
            if (this.budget < this.item.itemCost) {
                alert("You have insufficient funds!");
                //change the style one way
            } else if (this.maxWeight < this.item.itemWeight) {
                alert("Your car can't hold that much weight!");
                //change the style another way
            } else {
                this.currentItems.push(this.item);
                this.item.itemCount += 1;
                this.budget = this.budget - this.item.itemCost;
                this.maxWeight = this.maxWeight - this.items.itemWeight;
            }
            return this.currentTimes;
        }
    }
});