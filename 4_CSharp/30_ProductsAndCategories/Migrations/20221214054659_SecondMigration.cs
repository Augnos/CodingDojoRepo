using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace _30_ProductsAndCategories.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProdCatAssociations");

            migrationBuilder.CreateTable(
                name: "ProdCatAssns",
                columns: table => new
                {
                    ProdCatAssnId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    ProductId = table.Column<int>(type: "int", nullable: false),
                    CategoryId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProdCatAssns", x => x.ProdCatAssnId);
                    table.ForeignKey(
                        name: "FK_ProdCatAssns_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProdCatAssns_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_ProdCatAssns_CategoryId",
                table: "ProdCatAssns",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ProdCatAssns_ProductId",
                table: "ProdCatAssns",
                column: "ProductId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ProdCatAssns");

            migrationBuilder.CreateTable(
                name: "ProdCatAssociations",
                columns: table => new
                {
                    ProdCatAssociationId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    CategoryId = table.Column<int>(type: "int", nullable: false),
                    ProductId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProdCatAssociations", x => x.ProdCatAssociationId);
                    table.ForeignKey(
                        name: "FK_ProdCatAssociations_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProdCatAssociations_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "ProductId",
                        onDelete: ReferentialAction.Cascade);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_ProdCatAssociations_CategoryId",
                table: "ProdCatAssociations",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_ProdCatAssociations_ProductId",
                table: "ProdCatAssociations",
                column: "ProductId");
        }
    }
}
