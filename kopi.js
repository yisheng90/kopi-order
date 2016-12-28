var order1 = 'tea kopi'
var order2 = 'tea o'
var order3 = 'tea si'
var order4 = 'tea siewdai'
var order5 = 'tea si ice'

var order6 = 'kopi'
var order7 = 'kopi o'
var order8 = 'kopi si'
var order9 = 'kopi siewdai'
var order10 = 'kopi si ice'

var recipe = {
  kopi: 2,
  tea:2,
  sugar: 2,
  evaporatedMilk: false,
  condensedMilk: true,
  ice: false,
  cost: 1.50
}

function orderKopi (order) {

  if (order.match(/(^kopi\s\A*\s*\btea\b)|(^tea\s\A*\s*\bkopi\b)/)) {
    return console.log("No "+ order +" avialable.")
  }

  
  if (order.match(/\A*\s\o\s/)) {
    recipe['sugar'] = 0
  }

  if (order.match(/\A*\s*\bkosong\b/)) {
    recipe['condensedMilk'] = false
  }

  if (order.match(/(\A*\s*\bsiew dai\b)|(\A*\s*\bsiewdai\b)/)) {
    recipe['sugar'] = 1
  }

  if (order.match(/\A*\s\bsi\b/)) {
    recipe['evaporatedMilk'] = true
    recipe['condensedMilk'] = false
  }

  if (order.match(/(\A*\s\bice\b)|(\A*\s*\bpeng\b)/)) {
    recipe['ice'] = true
    recipe['cost'] = 1.80
  }

  if (order.match(/\A*\s*\bgau\b/)) {
    if (order.match(/^kopi/)) {
      recipe['kopi'] += 1
      delete recipe['tea']
    } else {
      recipe['tea'] += 1
      delete recipe['kopi']
    }
  }

  if (order.match(/^tea/)) {
    delete recipe['kopi']
    recipe['tea'] = 1
  }
  
  if (order.match(/\A*\s*\bpo\b/)) {
    if (prder.match(/^tea/)) {
      recipe['tea'] -= 0.5
    } else {
      recipe['kopi'] -= 0.5
    }
  }

  recipe['step'] = []
  for (var key in recipe) {
    if ((key !== 'cost') && (key !== 'step')) {
      if (typeof (recipe[key]) === 'boolean' && recipe[key] === true) {
        recipe['step'].push('Pour in 1 portion of ' + key)
      } else if (typeof (recipe[key]) !== 'boolean') {
        recipe['step'].push('Pour in ' + recipe[key] + ' portion of ' + key)
      }
    }
  }
  console.log(order,":",recipe)
}

orderKopi(order1)
orderKopi(order2)
orderKopi(order3)
orderKopi(order4)
orderKopi(order5)
orderKopi(order6)
orderKopi(order7)
orderKopi(order8)
orderKopi(order9)
