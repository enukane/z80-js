/* buses */
function z80_ctrl_bus() {
	this.MI			= 0;
	this.MREQ		= 0;
	this.IORQ		= 0;
	this.RD			= 0;
	this.WR			= 0;
	this.RFSH		= 0;
	this.RESET	= 0;
	this.NMI		= 0;
	this.INT		= 0;
	this.WAIT		= 0;
	this.HALT		= 0;
	this.BUSRQ	= 0;
	this.BUSAK	= 0;
}

function z80_addr_bus() {
	this.size = 8;
	this.addr[this.size]	= 0;
	this.initialize = function() {
		for (bit in this.addr) {
			bit = 0;
		}
	}
}

function z80_data_bus() {
	this.size = 16;
	this.data[this.size]	= 0;
	this.initialize = function() {
		for (bit in this.data) {
			bit = 0;
		}
	};
}

/* objects */
function z80_mpu(ctrlbus, addrbus, databus) {
	this.ctrlbus = ctrlbus;
	this.addrbus = addrbus;
	this.databus = databus;
	this.state = 0;

	this.clockup = function() {
	};

	this.clockdown = function() {
	};
}

function memory(ctrlbus, addrbus, databus) {
	this.ctrlbus = ctrlbus;
	this.addrbus = addrbus;
	this.databus = databus;
	this.state = 0;

/* buses */
var ctrlbus = new z80_ctrl_bus();
var addrbus = new_z80_addr_bus();
var databus = new_z80_data_bus();

/* objects */
var mpu = new z80_mpu(ctrlbus, addrbus, databus);
var memory = new memory(ctrlbus, addrbus, databus);


/* system */
function on_clockup() {
	mpu.clockup()
	memory.clockup();
}

function on_clockdown() {
	mpu.clockdown();
	mpu.clockup();
}


