// Vue.component('current-items', {
//     template: `
//         <div class="current-items">
//             <div>{{name}} - {{count}}
//             <button>delete</button></div>
//         </div>
//     `,
//     props: ['name', 'count'],
//     data: function () {

//         return {};
//     },
//     computed: {},
//     methods: {
//         getrid: function() {
            
//             this.$emit('deleted');

//         }
//     }
// });

// Vue.component('available-items', {
//     template: `
//         <span class="available-items">
//             <span><img v-on:click="addon" v-bind:src="pic" class="itemimage"></span>
//         </span>
//     `,
//     props: ['pic'],

//     computed: {},
//     methods: {
//         getrid: function() {
//             this.$emit('deleted');
//         },
//         addon: function(item) {
//             if (vm.budget < item.itemCost) {
//                 alert("You have insufficient funds!");
//                 //change the style one way
//             } else if (vm.maxWeight < item.itemWeight) {
//                 alert("Your car can't hold that much weight!");
//                 //change the style another way
//             } else {
//                 vm.currentItems.push(item);
//                 item.itemCount += 1;
//                 vm.budget = vm.budget - item.itemCost;
//                 vm.maxWeight = vm.maxWeight - item.itemWeight;
//             }
//             return vm.currentTimes;
//         // function(item) {
//         //     currentItems.push()
//         //     adder(item);
//         //     this.$emit('added');
//         }
//     }
// });


var vm = new Vue({
    el: '#app',
    data: {
        maxWeight: 500,
        budget: 100,
        items: [{
            name: 'a poop raft',
            weight: 5,
            cost: 51,
            count: 0,
            pic: './roadtrip/poopraft.jpg',
            deleted: false
        },
        {
            name: 'a cat',
            weight: 415,
            cost: 0,
            count: 0,
            pic: './roadtrip/cat.jpg',
            deleted: false,
        },
        {
            name: 'a broken guitar',
            weight: 112,
            cost: 13,
            count: 0,
            pic: './roadtrip/brokenguitar.jpg',
            deleted: false,
        },
        {
            name: 'one left snowshoe',
            weight: 122,
            cost: 10,
            count: 0,
            pic: './roadtrip/snowshoe.jpg',
            deleted: false,
        },
        {
            name: 'a stick and bindle of rags and shame',
            weight: 110,
            cost: 0,
            count: 0,
            pic: './roadtrip/bindlestick.jpg',
            deleted: false,
        },
        {
            name: 'a cooler of beer',
            weight: 130,
            cost: 40,
            count: 0,
            pic: './roadtrip/coolerofbeer.jpg',
            deleted: false,
        },
        {
            name: 'an eighth of weed',
            weight: 125,
            cost: 0.008,
            count: 0,
            pic: './roadtrip/weed.jpeg',
            deleted: false,
        },
        {
            name: 'a sandwich',
            weight: 100.5,
            cost: 7,
            count: 0,
            pic: './roadtrip/sandwich.jpeg',
            deleted: false,
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
        adder: function(item) {
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
        },
        addRaft: function() {
            if (this.budget < this.items[0].itemCost) {
                alert("You have insufficient funds!");
                //change the style one way
            } else if (this.maxWeight < this.items[0].itemWeight) {
                alert("Your car can't hold that much weight!");
                //change the style another way
            } else {
                this.currentItems.push(this.items[0]);
                this.items[0].itemCount += 1;
                this.budget = this.budget - this.items[0].itemCost;
                this.maxWeight = this.maxWeight - this.items[0].itemWeight;
            }
            return this.currentTimes;
        },
        addCat: function() {
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
        addGuitar: function() {
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
        addShoe: function() {
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
        addBindle: function() {
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
        addCooler: function() {
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
        addWeed: function() {
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
        addSandwich: function() {
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



        ridder: function() {
            if (!items.itemCount > 1) {
                this.item.deleted = true;
            } else {
                this.items.itemCount -= 1;
                this.maxWeight = this.maxWeight + this.items.itemWeight;
                this.budget = this.budget + this.items.itemCost;
            }
        },
        adder: {},
    }
});