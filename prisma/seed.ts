import { PrismaClient } from '@prisma/client';
import { Role, KycStatus, VehicleType, PoolStatus } from '../src/types';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Sebez Market database...');

  // 1. Categories
  await Promise.all([
    prisma.category.upsert({
      where: { slug: 'smartphones' },
      update: {},
      create: { name: 'Smartphones & Tablets', slug: 'smartphones', iconName: 'Smartphone' },
    }),
    prisma.category.upsert({
      where: { slug: 'laptops' },
      update: {},
      create: { name: 'Laptops & Computers', slug: 'laptops', iconName: 'Laptop' },
    }),
    prisma.category.upsert({
      where: { slug: 'cameras' },
      update: {},
      create: { name: 'Cameras & Audio', slug: 'cameras', iconName: 'Camera' },
    }),
    prisma.category.upsert({
      where: { slug: 'appliances' },
      update: {},
      create: { name: 'Home Appliances', slug: 'appliances', iconName: 'Home' },
    }),
  ]);

  // 2. Demo Users
  const user1 = await prisma.user.upsert({
    where: { phone: '+251911223344' },
    update: {},
    create: {
      name: 'Abebe Demissie',
      email: 'abebe@example.com',
      phone: '+251911223344',
      passwordHash: 'demo_hash_123',
      role: Role.DRIVER,
      city: 'Adama',
      kebele: 'Bole',
      landmark: 'Near Bole High School',
      rating: 4.9,
      completedTrades: 14,
    },
  });

  await prisma.user.upsert({
    where: { phone: '+251922334455' },
    update: {},
    create: {
      name: 'Chaltu Tadesse',
      email: 'chaltu@example.com',
      phone: '+251922334455',
      passwordHash: 'demo_hash_123',
      role: Role.BUYER,
      city: 'Adama',
      kebele: 'Arada',
      landmark: 'Near Arada Medhanialem',
      rating: 5.0,
      completedTrades: 6,
    },
  });

  await prisma.user.upsert({
    where: { phone: '+251933445566' },
    update: {},
    create: {
      name: 'Dawit Bekele',
      email: 'dawit@example.com',
      phone: '+251933445566',
      passwordHash: 'demo_hash_123',
      role: Role.BUYER,
      city: 'Adama',
      kebele: 'Kebele 04',
      landmark: 'Behind Stadium',
      rating: 4.8,
      completedTrades: 8,
    },
  });

  // 3. Driver KYC for Abebe
  await prisma.driverKyc.upsert({
    where: { userId: user1.id },
    update: {},
    create: {
      userId: user1.id,
      nationalIdNumber: 'ETH-ADAMA-98421',
      licenseNumber: 'DL-OROMIA-55412',
      vehicleType: VehicleType.BAJAJ,
      plateNumber: '3-B042-OR',
      status: KycStatus.APPROVED,
      verifiedAt: new Date(),
    },
  });

  // 4. Sample Pooled Delivery Run (Arada to Bole)
  const tomorrowRun = new Date();
  tomorrowRun.setHours(tomorrowRun.getHours() + 3);

  await prisma.deliveryPool.create({
    data: {
      originMarket: 'Arada Commercial Market, Adama',
      destinationKebele: 'Bole Kebele',
      driverId: user1.id,
      status: PoolStatus.GATHERING,
      scheduledDeparture: tomorrowRun,
      maxOrders: 6,
      ordersCount: 4,
      baseFare: 150.0,
      discountedFarePerUser: 40.0,
    },
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
