brewery1logo = File.open(File.join(Rails.root, '/public/images/madtree.jpeg'))
brewery2logo = File.open(File.join(Rails.root, '/public/images/rhinegeist.jpeg'))

brewery1 = Brewery.create!(name:'MadTree Brewing', address: '3301 Madison Rd', city: 'Cincinnati', state: 'OH', phone: '513-836-8733', image: brewery1logo, website: 'www.madtreebrewing.com')
brewery2 = Brewery.create!(name:'Rhinegeist Brewing', address: '27 W 7th St', city: 'Covington', state: 'KY', phone: '859-261-5600', image: brewery2logo, website: 'www.rhinegeist.com')
brewery3 = Brewery.create!(name:'Taft\'s Ale House', address: '1429 Race St', city: 'Cincinnati', state: 'OH', phone: '513-334-1393', website: 'www.taftsalehouse.com')

 brewery3.image = Pathname.new(Rails.root.join('public/images/tafts.jpeg')).open; brewery3.save!
