"""empty message

Revision ID: 75c3ff35b3c3
Revises: 6a89170728ba
Create Date: 2019-11-29 10:51:40.449764

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '75c3ff35b3c3'
down_revision = '6a89170728ba'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('order', sa.Column('test_column', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('order', 'test_column')
    # ### end Alembic commands ###
